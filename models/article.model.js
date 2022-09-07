const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const articleSchema = new Schema({ 
image: {
    type: String, 
    required: true
},
title: { 
    type:String,
    required: true
},
price: {
    type: Number, 
    required: true
}
})

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
