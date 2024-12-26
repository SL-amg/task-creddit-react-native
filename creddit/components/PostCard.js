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

const PostCard = ( { id, title, description, handelPost, deletePost, addAComment }) => {
  return (
    <View>
      <Text>The Post-ID is </Text>
      <Text>{id}</Text>
      <Text>The Title is </Text>
      <Text>{title}</Text>
      <Text>Description </Text>
      <Text>{description}</Text>
      <View>
      <Button title="See Post Detail" onPress={handelPost} />
      </View>
      <View>
      <Button title="Delete a Post" onPress={deletePost} />
      </View>
      <View>
      <Button title="Add a Comment" onPress={addAComment} />
      </View>
    </View>
  );
};

export default PostCard;
