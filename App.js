import HomeScreen from "./screens/HomeScreen";
import BirthdayScreen from "./screens/Birthday";
import ResultScreen from "./screens/Result";
import InfoScreen from "./screens/Info";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Birthday"
          component={BirthdayScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Result"
          component={ResultScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Info"
          component={InfoScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}