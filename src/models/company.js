import mongoose from "mongoose"
const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  corporate_reason: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true
  },
})

export default mongoose.model('Company', companySchema);