import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  SearchBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { deletePostById, getAllPosts } from "../api/post";
import PostCard from "./PostCard";
import { useNavigation } from "@react-navigation/native";
import { useQuery, useMutation, } from "@tanstack/react-query";


const PostsScreens = () => {

    const navigation = useNavigation();


  //to get all posts
  const { data, isFetching, isSuccess, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
    enabled: true,
  });

  //to delete a post
  const deleteMutation = useMutation({
    mutationKey: ["deletePost"],
    mutationFn: (newPost) => deletePostById(newPost),
    onSucess: () => {
      navigation.navigate("Post List");
    }})
    const handleDelete = (id) => {
      deleteMutation.mutate(id);
    };

  const postViewList = data?.map((post) => (
    <PostCard
      post={post}
      key={post?.id}
      id={post?.id}
      title={post?.title}
      description={post?.description}
      handelPost={() => {
        navigation.navigate("PostDetail", { postId: post.id });
      }}
      deletePost={() =>{
        handleDelete(post?.id)
      }}
      addAComment={() => {
        navigation.navigate("AddNewComment", { postId: post.id });
      }}
    />
  ));

  console.log("data", data);


  return (
  
    <ScrollView>
  <View>
    <Button
        title="Create a New Post"
        onPress={() => navigation.navigate("Add Post")}
      />
    
    
    {postViewList}</View>

    </ScrollView>


);

};

export default PostsScreens;
