import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Pages/Home";
import History from "../Pages/History";

import { navigationRef } from "../Utils/navigation";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="History"
          component={History}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
