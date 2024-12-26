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
import { getOnePostById } from "../api/post";
import { useQuery } from "@tanstack/react-query";

const PostDetail = ({ route }) => {
  const { postId } = route.params;

  const { data } = useQuery({
    queryKey: ["postDataId", postId],
    queryFn: () => getOnePostById(postId),
  });

  return (
    <View>
      <Text>The Post-ID is </Text>
      <Text>{data?.id}</Text>
      <Text>The Title is </Text>
      <Text>{data?.title}</Text>
      <Text>Description </Text>
      <Text>{data?.description}</Text>
      {data?.comments?.map((comment) => (
        <View key={comment?.id}>
          <Text>Username: {comment?.username}</Text>
          <Text>Comment: {comment?.comment}</Text>
        </View>
      ))}
    </View>
  );
};

export default PostDetail;
