import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  SearchBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { getAllPosts } from "../api/post";
import { useQuery } from "@tanstack/react-query";
import PostCard from "./PostCard";
import { useNavigation } from "@react-navigation/native";

const PostsScreens = () => {

    const navigation = useNavigation();


  //to get all posts
  const { data, isFetching, isSuccess, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
    enabled: true,
  });

  const postViewList = data?.map((post) => (
    <PostCard
      post={post}
      key={post?.id}
      id={post?.id}
      title={post?.title}
      description={post?.description}
    />
  ));

  console.log("data", data);


  return (
  
  <View>
    <Button
        title="Go to Creat Post"
        onPress={() => navigation.navigate("Add Post")}
      />
    
    
    {postViewList}</View>

);

};

export default PostsScreens;
