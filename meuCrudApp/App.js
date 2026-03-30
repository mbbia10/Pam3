import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AddEditScreen from "./screens/AddEditScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Lista de Pessoas" }}
        />

        <Stack.Screen
          name="AddEdit"
          component={AddEditScreen}
          options={{ title: "Adicionar / Editar" }}
        />

      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}