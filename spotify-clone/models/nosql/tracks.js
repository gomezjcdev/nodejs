const mongoose = require("mongoose");
const mongooseDelete = require('mongoose-delete');
const TrackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String
    },
    cover: {
      type: String,
      validate: (req) => {
        return true;
      },
      message: "ERROR_URL",
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      }
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      }
    },
    mediaId: {
      type: mongoose.Types.ObjectId
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

/**
 * Relation to storage
 */

TrackSchema.statics.findByName = function (name) {
  return this.aggregate([
    {
      $lookup: {
        from: "storages",
        localField: "mediaId",
        foreignField: "id",
        as: "audio"
      }
    }
  ]);
};

TrackSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model("tracks", TrackSchema);