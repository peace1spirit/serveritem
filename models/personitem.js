var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var Schema = mongoose.Schema;

var personitemSchema = new Schema({
  ID:Number,
  Firstname: String,
  Lastname:  String,
  Email: String,
  Item : String,
  Quantity: Number,
  Totalprice: Number
});
personitemSchema.plugin(AutoIncrement, {inc_field: 'ID'});
var PersonItem=mongoose.model('PersonItem',personitemSchema)
module.exports=PersonItem;