const { Schema, model } = require('mongoose')

const CaseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    sequence: {
      type: Schema.Types.Mixed,
    },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
)

CaseSchema.index({ owner: 1 })

const Case = model('Case', CaseSchema)

module.exports = {
  Case,
  CaseSchema,
}
