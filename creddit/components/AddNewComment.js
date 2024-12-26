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
import { addNewCommentToPostById } from "../api/comment";
import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient} from "@tanstack/react-query";
import React, { useState } from "react";

const AddNewComment = ({route}) => {

    const navigation = useNavigation();

    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");

    const queryClient = useQueryClient();

    const { postId } = route.params;

    const createCommentMutation = useMutation({
        mutationKey: ["createComment", postId],
        mutationFn: (newComment) => addNewCommentToPostById(postId, newComment),
        onSucess: () => {
            alert("Comment created!");
            navigation.navigate("Post List");
          },
        });

        const handleCommentSubmit=()=>{
            createCommentMutation.mutate({
              username ,
              comment ,
            });}


  return (
<View>
      <TextInput
        placeholder="user Name"
        onChangeText={(e) => {
            setUsername(e);
        }}
      />
      <TextInput
        placeholder="Comment"
        onChangeText={(e) => {
            setComment(e);
        }}
      />
      <Button title="submit" onPress={handleCommentSubmit}/>

    </View>
  )
}

export default AddNewComment
