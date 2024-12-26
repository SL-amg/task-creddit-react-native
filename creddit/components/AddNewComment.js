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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

const AddNewComment = ({ route }) => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const { postId } = route.params;

  const createCommentMutation = useMutation({
    mutationKey: ["comments", postId],
    mutationFn: (data) => addNewCommentToPostById(postId, data),
    onSucess: () => {
      alert("OK!");
    },
  });

  const handleCommentSubmit = () => {
    createCommentMutation.mutate({
      username,
      comment,
    });
  };

  return (
    <View>
      <TextInput
        placeholder="user Name"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Comment"
        value={comment}
        onChangeText={setComment}
      />

      <Button title="submit" onPress={handleCommentSubmit} />
    </View>
  );
};

export default AddNewComment;
