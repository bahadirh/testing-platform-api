const { model, Schema } = require('mongoose')

const AppSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "App name can't be blank."],
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: [true, "Owner ID can't be blank."],
    ref: 'User',
  },
  version: {
    type: String,
    trim: true,
  },
  files: {
    type: [Schema.Types.ObjectId],
    ref: 'File',
  },
})
AppSchema.index({ owner: 1 })

const App = model('App', AppSchema)

module.exports = { App, AppSchema }
