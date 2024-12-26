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

const PostCard = ( { id, title, description }) => {
  return (
    <View>
      <Text>The Post-ID is </Text>
      <Text>{id}</Text>
      <Text>The Title is </Text>
      <Text>{title}</Text>
      <Text>Description </Text>
      <Text>{description}</Text>
    </View>
  );
};

export default PostCard;
