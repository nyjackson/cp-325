/***\
 * _id, name, author, posted_on, edited_on, tags, content, imgs
 *
 *
 */

import mongoose from "mongoose";
const articleSchema = mongoose.Schema({
  article_name: { type: String, required: true },
  author: { type: String, required: true },
  posted_on: { type: Date, default: Date.now(), required:true },
  edited_on : {type:Date, required:false},
  tags: {type: Array, required: false},
  content: {type: String, required: true},
  imgs: {type:Array, required:false}
});

const Article = mongoose.model('articles', articleSchema)

export default Article
