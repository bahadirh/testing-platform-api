const { model, Schema } = require('mongoose')

const TestSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    testSpec: {
      type: Schema.Types.Mixed,
      required: true,
    },
    files: [{ type: String }],
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
)

const Test = model('Test', TestSchema)

module.exports = { Test, TestSchema }
