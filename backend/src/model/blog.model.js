import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String, 
  content:{
    type: Object,
    required: true,
  },
  coverImg:String,
  category:String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
  writer: {
    type:String
  }
 
});


const Blog = mongoose.model('Blog', blogSchema);

export default Blog;