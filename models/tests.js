const { model, Schema } = require('mongoose')

const TestSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    platformVersion: {
      type: String,
      required: true,
    },
    testCase: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Case',
    },
    buildFile: {
      type: Schema.Types.ObjectId,
      required: [true, 'Cannot run test without an app.'],
      ref: 'File',
    },
    files: [{ type: String }],
    status: {
      type: String,
      enum: ['Submitted', 'Error', 'Done'],
      required: true,
      default: 'Submitted',
    },
    result: {
      type: Schema.Types.Mixed,
    },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
)

const Test = model('Test', TestSchema)

module.exports = { Test, TestSchema }
