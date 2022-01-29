import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";
import FormData from "./Components/FormData";
import FormSucess from "./Components/FormSuccess";
import FormFailure from "./Components/FormFailure";

const Stack = createNativeStackNavigator();

export default function App() {
  // to navigate between different screens
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            cardOverlayEnabled: true,
            ...TransitionPresets.RevealFromBottomAndroid,
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={FormData} />
          <Stack.Screen name="sucess" component={FormSucess} />
          <Stack.Screen name="fail" component={FormFailure} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
