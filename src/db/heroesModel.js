const mongoose = require("mongoose");

const heroesSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: [true, "Set nickname for hero"],
  },
  real_name: String,
  origin_description: String,
  superpowers: String,
  catch_phrase: String,
  Images: String,
});
const Hero = mongoose.model("Heroe", heroesSchema);

module.exports = {
  Hero,
};
