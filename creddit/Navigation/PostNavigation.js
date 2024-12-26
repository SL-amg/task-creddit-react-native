import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostsScreens from "../components/PostsScreens";
import PostAdd from "../components/PostAdd";

const Stack = createNativeStackNavigator();

const PostNavigation = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Post List" component={PostsScreens} />
      <Stack.Screen name="Add Post" component={PostAdd} />
      </Stack.Navigator>
  )
}

export default PostNavigation
