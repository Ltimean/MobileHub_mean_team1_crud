var mongoose = require('mongoose');

var PhoneSchema = new mongoose.Schema({
  phoneId: String,
  phoneName: String,
  OS: String,
  description: String,
  camera: String,
  storage: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Phone', PhoneSchema);
