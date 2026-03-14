import { config } from "./config";

interface CreatePinParams {
  title: string;
  description: string;
  link: string;
  boardId: string;
  imageBase64: string;
}

interface PinResponse {
  success: boolean;
  pinId?: string;
  error?: string;
}

// Active access token (may be refreshed during runtime)
let activeAccessToken = config.pinterest.accessToken;

// Refresh the access token using the refresh token
export async function refreshAccessToken(): Promise<string | null> {
  const { appId, appSecret, refreshToken } = config.pinterest;
  if (!refreshToken || !appId || !appSecret) {
    console.error("Missing refresh token or app credentials");
    return null;
  }

  const basicAuth = Buffer.from(`${appId}:${appSecret}`).toString("base64");

  try {
    const response = await fetch("https://api.pinterest.com/v5/oauth/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error(`Token refresh failed ${response.status}:`, errorData);
      return null;
    }

    const data = await response.json();
    activeAccessToken = data.access_token;
    console.log("Access token refreshed successfully");
    return data.access_token;
  } catch (error) {
    console.error("Token refresh error:", error);
    return null;
  }
}

// Ensure we have a valid token (refresh if needed)
export async function ensureValidToken(): Promise<boolean> {
  // First try existing token
  if (activeAccessToken) {
    const valid = await verifyToken();
    if (valid) return true;
  }

  // Try refreshing
  console.log("Access token expired, refreshing...");
  const newToken = await refreshAccessToken();
  return newToken !== null;
}

// Create a pin on Pinterest using the API v5
export async function createPin(params: CreatePinParams): Promise<PinResponse> {
  if (!activeAccessToken) {
    return { success: false, error: "No Pinterest access token available" };
  }

  try {
    const response = await fetch("https://api.pinterest.com/v5/pins", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${activeAccessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: params.title.substring(0, 100),
        description: params.description.substring(0, 500),
        link: params.link,
        board_id: params.boardId,
        media_source: {
          source_type: "image_base64",
          content_type: "image/png",
          data: params.imageBase64,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error(`Pinterest API error ${response.status}:`, errorData);
      return {
        success: false,
        error: `API error ${response.status}: ${errorData}`,
      };
    }

    const data = await response.json();
    return {
      success: true,
      pinId: data.id,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Pinterest API call failed:", message);
    return { success: false, error: message };
  }
}

// Verify Pinterest API access token is valid
export async function verifyToken(): Promise<boolean> {
  if (!activeAccessToken) return false;

  try {
    const response = await fetch("https://api.pinterest.com/v5/user_account", {
      headers: { Authorization: `Bearer ${activeAccessToken}` },
    });
    return response.ok;
  } catch {
    return false;
  }
}

// Get board info to verify board ID
export async function getBoard(boardId: string): Promise<{ name: string } | null> {
  if (!activeAccessToken) return null;

  try {
    const response = await fetch(
      `https://api.pinterest.com/v5/boards/${boardId}`,
      { headers: { Authorization: `Bearer ${activeAccessToken}` } }
    );
    if (!response.ok) return null;
    const data = await response.json();
    return { name: data.name };
  } catch {
    return null;
  }
}
