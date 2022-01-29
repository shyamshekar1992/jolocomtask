import React, { useState, useEffect, useRef } from "react";
import { ScrollView, View } from "react-native";
import { Button, TextInput, Title, Paragraph } from "react-native-paper";

export default function Form({ navigation }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [disabled, setDisabled] = useState(null);
  const [sucess, setSucess] = useState(null);

  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();

  // form data

  const formData = {
    firstName: firstName,
    lastName: lastName,
    Phone: phoneNumber,
    email: email,
    age: age,
  };

  // checks the form if all fields are filled and enables the submit button

  useEffect(() => {
    if (firstName && lastName && phoneNumber && email && age) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData]);

  // creates a random number either odd or even and renders a submit button either with sucess or failure message  //

  useEffect(() => {
    
    let number = Math.floor(Math.random() * 100 + 1);
    console.log(number);
    if (number % 2 == 0) {
      setSucess(false);
    } else {
      setSucess(true);
    }
  }, [sucess]);

  // To clear the form data once the form is submitted  //

  const handleClick = () => {
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setAge("");
    console.log(formData);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Title>Add your</Title>
            <Paragraph>
              {" "}
              To complete your profile please fill all the fields
            </Paragraph>
          </View>

          <View style={{ alignContent: "center" }}>
            <TextInput
              mode="outlined"
              label="First name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              autoFocus={true}
              onSubmitEditing={() => ref_input2.current.focus()}
            />
            <TextInput
              mode="outlined"
              label="Last name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              onSubmitEditing={() => ref_input3.current.focus()}
              ref={ref_input2}
            />
            <TextInput
              mode="outlined"
              label="Phone"
              numeric
              value
              value={phoneNumber}
              onSubmitEditing={() => ref_input4.current.focus()}
              onChangeText={(text) => setPhoneNumber(text)}
              ref={ref_input3}
              keyboardType={"numeric"}
            />
            <TextInput
              mode="outlined"
              label="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              onSubmitEditing={() => ref_input5.current.focus()}
              ref={ref_input4}
            />
            <TextInput
              mode="outlined"
              label="Age"
              numeric
              value
              value={age}
              onChangeText={(text) => setAge(text)}
              ref={ref_input5}
              keyboardType={"numeric"}
            />

            {sucess ? (
              <View>
                <Button
                  disabled={disabled}
                  mode="contained"
                  onPress={() => {
                    handleClick();
                    navigation.navigate("sucess", formData);
                  }}
                >
                  {" "}
                  Submit
                </Button>
              </View>
            ) : (
              <View>
                <Button
                  disabled={disabled}
                  mode="contained"
                  onPress={() => {
                    handleClick();
                    navigation.navigate("fail");
                  }}
                >
                  {" "}
                  Submit
                </Button>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
