import mongoose from 'mongoose';

const PinterestTemplateSchema = new mongoose.Schema({
  // Base reference
  baseId: {
    type: String,
    required: true,
  },
  baseType: {
    type: String,
    enum: ['war', 'farm', 'trophy'],
    required: true,
  },
  hallType: {
    type: String,
    enum: ['TH', 'BH'],
    default: 'TH',
  },
  hallLevel: {
    type: Number,
    required: true,
  },
  baseNumber: {
    type: Number,
  },

  // Pinterest content
  title: {
    type: String,
    required: true,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    maxlength: 500,
  },
  hashtags: [{
    type: String,
  }],

  // Image
  imageUrl: {
    type: String,
    default: '',
  },

  // Link to your site
  destinationUrl: {
    type: String,
    required: true,
  },

  // Status
  status: {
    type: String,
    enum: ['draft', 'ready', 'scheduled', 'posted'],
    default: 'draft',
  },

  // Stats
  timesUsed: {
    type: Number,
    default: 0,
  },

  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.PinterestTemplate || mongoose.model('PinterestTemplate', PinterestTemplateSchema);
