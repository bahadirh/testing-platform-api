const { model, Schema } = require('mongoose')

const SuiteSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Every suite requires a name.'],
    },
    app: {
      type: Schema.Types.ObjectId,
      ref: 'App',
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
)
SuiteSchema.index({ name: 1, owner: 1 })

const Suite = model('Suite', SuiteSchema)

module.exports = { Suite, SuiteSchema }
