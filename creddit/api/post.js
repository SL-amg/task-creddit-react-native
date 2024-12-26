// this is the api for all post requestes
import instance from "./index";

//to get all posts
async function getAllPosts() {
      const data = await instance.get('/posts');
      return data;
  }
  
//to get a single post by ID
async function getOnePostById(id) {
    const response = await instance.get(`/posts/${id}`);
    console.log(response);
    return response
  }

//to get add new Post
async function addNewPost(formData) {
    console.log(formData);
    const response = await instance.post("/posts", formData);
    console.log("addNewPost", response);
    return response.data;
  }

//to delete post by ID
async function deletePostById(id) {
    const response = await instance.delete(`/posts/${id}`);
    return response
  }




  export {getAllPosts, getOnePostById, addNewPost, deletePostById}