const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    userid: {type:String, required: true},
    birthdate: {type:Date, required: true},
    expensetype: {type:String, required: true},
    age: {type:Number, required: true},
    name: {type:String}
});

ExpenseSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('expenses', ExpenseSchema, 'expenses');
