import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  article_name: { type: String, required: true },
  author: { type: String, required: true },
  posted_on: { type: Date, default: Date.now(), required:true },
  edited_on : {type:Date},
  tags: {type: Array},
  content: {type: String, required: true},
  imgs: {type:Array}
});

articleSchema.index({"author":1})
const Article = mongoose.model('articles', articleSchema)

export default Article
