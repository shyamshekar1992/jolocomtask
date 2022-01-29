import React from "react";

import { View } from "react-native";
import { Button, Title, Avatar } from "react-native-paper";

export default function Failure({ navigation }) {
  return (

    <>
      <View style={{ alignItems: "center" }}>
        <Title>Oopsie there seems to be some error try again after sometime</Title>
        <Avatar.Image
          size={80}
          source={{
            uri: "https://previews.123rf.com/images/rawpixel/rawpixel1810/rawpixel181022962/111300343-red-wrong-cross-icon-isolated.jpgNPM RU",
          }}
        />

        <Button onPress={() => navigation.navigate("Home")} mode="contained">
          Start over
        </Button>
      </View>
    </>
  );
}
