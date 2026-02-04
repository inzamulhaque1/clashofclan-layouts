import mongoose from 'mongoose';

const PinterestScheduleSchema = new mongoose.Schema({
  // Template reference
  templateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PinterestTemplate',
    required: true,
  },

  // Schedule details
  scheduledDate: {
    type: Date,
    required: true,
  },
  scheduledTime: {
    type: String, // "09:00", "12:00", etc.
    required: true,
  },

  // Pinterest board
  boardId: {
    type: String,
  },
  boardName: {
    type: String,
  },

  // Status
  status: {
    type: String,
    enum: ['pending', 'processing', 'posted', 'failed', 'cancelled'],
    default: 'pending',
  },

  // Result
  pinterestPinId: {
    type: String, // Pinterest's pin ID after posting
  },
  pinterestUrl: {
    type: String, // URL to the pin on Pinterest
  },
  error: {
    type: String, // Error message if failed
  },

  // Retry info
  retryCount: {
    type: Number,
    default: 0,
  },
  maxRetries: {
    type: Number,
    default: 3,
  },

  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now,
  },
  postedAt: {
    type: Date,
  },
});

// Index for efficient querying
PinterestScheduleSchema.index({ scheduledDate: 1, status: 1 });
PinterestScheduleSchema.index({ status: 1 });

export default mongoose.models.PinterestSchedule || mongoose.model('PinterestSchedule', PinterestScheduleSchema);
