import GoogleProvider from 'next-auth/providers/google';

// Admin emails - only these can access admin panel
const ADMIN_EMAILS = [
  'inzamulhaque1002@gmail.com',
];

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Allow all Google sign-ins
      return true;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.email = user.email;
        token.isAdmin = ADMIN_EMAILS.includes(user.email?.toLowerCase());
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.isAdmin = token.isAdmin || false;
        session.user.status = token.isAdmin ? 'admin' : 'pending';
      }
      return session;
    },
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export function isAdmin(email) {
  return ADMIN_EMAILS.includes(email?.toLowerCase());
}
