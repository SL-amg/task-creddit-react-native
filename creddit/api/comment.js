// this is the api for all Comment requestes
import instance from "./index";

//to get add new Post
async function addNewCommentToPostById(id, formData) {
    console.log(formData);
    const response = await instance.post(`/posts/:${id}/comments`, formData);
    console.log("addNewCommentToPostById", response);
    return response.data;
  }


//to delete comment by ID
async function deleteCommentById(id) {
    const response = await instance.delete(`/posts/comments/:${id}`);
    return response
  }

  export {addNewCommentToPostById, deleteCommentById}