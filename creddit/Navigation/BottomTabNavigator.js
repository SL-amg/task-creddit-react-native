import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigation from "./HomeNavigation";
import PostsScreens from "../components/PostsScreens";
import PostNavigation from "./PostNavigation";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Posts" component={PostNavigation} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
