import React from "react";

import { View, ScrollView } from "react-native";
import { Button, Card, Paragraph, Avatar, Title } from "react-native-paper";

export default function FormSuccess({ route, navigation }) {

  // passing props from previous screen
  let { firstName, lastName, phoneNumber, email, age } = route.params;

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Card>
            <Card.Content>
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Title>Please verify your entered information</Title>

                <Avatar.Image
                  size={80}
                  source={{
                    uri: "https://thumbs.dreamstime.com/z/markierungssymbol-checked-right-click-icon-vector-166720459.jpg",
                  }}
                />
              </View>

              <Paragraph>Name: {firstName} </Paragraph>
              <Paragraph>Lastname: {lastName} </Paragraph>
              <Paragraph>Phone: {phoneNumber} </Paragraph>
              <Paragraph>Email: {email} </Paragraph>
              <Paragraph>Age: {age} </Paragraph>
            </Card.Content>
          </Card>

          <Button onPress={() => navigation.navigate("Home")} mode="contained">
            Start over
          </Button>
        </View>
      </ScrollView>
    </>
  );
}
