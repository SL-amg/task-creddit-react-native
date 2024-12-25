import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./HomeNavigation";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Posts" component={PostsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
