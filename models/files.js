const { model, Schema } = require('mongoose')

const FileSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
)
FileSchema.index({ owner: 1 })

const File_ = model('File', FileSchema)

module.exports = { File_, FileSchema }
