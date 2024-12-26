import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostsScreens from "../components/PostsScreens";
import PostAdd from "../components/PostAdd";
import PostDetail from "../components/PostDetail";
import AddNewComment from "../components/AddNewComment";

const Stack = createNativeStackNavigator();

const PostNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Post List" component={PostsScreens} />
      <Stack.Screen name="Add Post" component={PostAdd} />
      <Stack.Screen name="PostDetail" component={PostDetail} />
      <Stack.Screen name="AddNewComment" component={AddNewComment} />
    </Stack.Navigator>
  );
};

export default PostNavigation;
