const mongoose = require("mongoose");

const tyreSchema = mongoose.Schema({
  hinta: Number,
  koko: String,
  malli: String,
  merkki: String,
  rengasID: Number,
  saldo: Number,
  tyyppi: String,
});

tyreSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Tyre", tyreSchema);
