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
import React, { useState } from "react";
import { addNewPost } from "../api/post";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";

const PostAdd = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createMutation = useMutation({
    mutationKey: ["createPost"],
    mutationFn: (newPost) => addNewPost(newPost),
    onSucess: () => {
      navigation.navigate("Post List");
    },
  });
  const handleSubmit=()=>{
    console.log(title)
    createMutation.mutate({
      title ,
      description ,
    });}

  return (
    <View>
      <TextInput
        placeholder="Title"
        onChangeText={(e) => {
            setTitle(e);
        }}
      />
      <TextInput
        placeholder="Description"
        onChangeText={(e) => {
            setDescription(e);
        }}
      />
      <Button title="submit" onPress={handleSubmit}/>

    </View>
  );
};

export default PostAdd;
