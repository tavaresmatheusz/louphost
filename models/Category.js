import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
  displayName: String,
  type: String,
  id: String,
  iconUrl: String,
  plans: [{price: Number, ram: String, panel: String, disk: String, processor: String}]
});

module.exports = mongoose.models.Category || mongoose.model('Category', CategorySchema);