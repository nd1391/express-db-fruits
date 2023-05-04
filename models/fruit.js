const { Schema, model } = require('mongoose')
// destructuring mongoose for easier access to methods
// schema destructured above, same as "= new mongoose.Schema()"
const fruitSchema = new Schema({
  name: {type: String, required: true},
  color: {type: String, required: true},
  readyToEat: Boolean
})

// model destructured above, same as "= mongoose.model()"
// creating new model
// model(dataName, schemaName)
const Fruit = model('Fruit', fruitSchema);

module.exports = Fruit;