// this is the api for all Comment requestes
import instance from "./index";

//to get add new Post
async function addNewCommentToPostById(id, data) {
  const response = await instance.post(`/posts/${id}/comments`, data);
  // console.log("addNewCommentToPostById", response.data);
  return response.data;
}

//to delete comment by ID
async function deleteCommentById(id) {
  const response = await instance.delete(`/posts/comments/${id}`);
  return response;
}

export { addNewCommentToPostById, deleteCommentById };
