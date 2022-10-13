import mongoose from 'mongoose'

const DatacenterSchema = new mongoose.Schema({
  
  node: String,
  nodeImage: {
    url: String,
    size: {
      imageWidth: Number,
      imageHeight: Number
    }
  },
  datacenters: [{
      city: String,
      country: String,
      countryFlagUrl: String,
      plans: [
        {
        price: Number, 
        ram: String, 
        panel: String, 
        disk: String, 
        processor: String
        }
      ]
  }]
});

module.exports = mongoose.models.Datacenter || mongoose.model("Datacenter", DatacenterSchema);