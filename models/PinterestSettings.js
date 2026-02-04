import mongoose from 'mongoose';

const PinterestSettingsSchema = new mongoose.Schema({
  // Only one settings document
  _id: {
    type: String,
    default: 'pinterest_settings',
  },

  // API Credentials
  appId: {
    type: String,
  },
  appSecret: {
    type: String,
  },
  accessToken: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
  tokenExpiresAt: {
    type: Date,
  },

  // Pinterest account info
  accountId: {
    type: String,
  },
  accountUsername: {
    type: String,
  },

  // Default board
  defaultBoardId: {
    type: String,
  },
  defaultBoardName: {
    type: String,
  },

  // Automation settings
  automationEnabled: {
    type: Boolean,
    default: false,
  },
  dailyPinLimit: {
    type: Number,
    default: 10,
  },

  // Posting times (24h format)
  postingTimes: [{
    type: String, // "09:00", "12:00", "15:00", "18:00", "21:00"
  }],

  // Default content settings
  defaultHashtags: [{
    type: String,
  }],

  // Site URL for destination links
  siteUrl: {
    type: String,
    default: 'https://game365hub.com',
  },

  // Timestamps
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Initialize default posting times
PinterestSettingsSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  if (!this.postingTimes || this.postingTimes.length === 0) {
    this.postingTimes = ['09:00', '12:00', '15:00', '18:00', '21:00'];
  }
  if (!this.defaultHashtags || this.defaultHashtags.length === 0) {
    this.defaultHashtags = [
      'clashofclans', 'coc', 'clashbase', 'cocbase',
      'clashofclanslayout', 'clashlayouts', 'mobilegaming'
    ];
  }
  next();
});

export default mongoose.models.PinterestSettings || mongoose.model('PinterestSettings', PinterestSettingsSchema);
