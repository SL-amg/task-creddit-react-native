import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeComponent from '../components/HomeComponent'

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (

    <Stack.Navigator>
      <Stack.Screen name="Home Screen" component={HomeComponent} />
      </Stack.Navigator>


);
};

export default HomeNavigation;