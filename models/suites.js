const { model, Schema } = require('mongoose')

const SuiteSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Cannot create a suite without a name.'],
  },
  app: {
    type: Schema.Types.ObjectId,
    ref: 'App',
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})
SuiteSchema.index({ name: 1, owner: 1 })

const Suite = model('Suite', SuiteSchema)

module.exports = { Suite, SuiteSchema }