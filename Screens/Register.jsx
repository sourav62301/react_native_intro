import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";

import { TextInput, Button, Checkbox, Headline } from "react-native-paper";

const Main = ({ navigation }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={{ backgroundColor: "black", height: 4000 }}>
      <Headline style={styles.heading}>Register Now</Headline>

      <TextInput placeholder="Name" textColor="white" style={styles.inputs} />
      <TextInput placeholder="Email" textColor="white" style={styles.inputs} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        textColor="white"
        style={styles.inputs}
      />
      <View
        style={{
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
          margin: 10,
          marginBottom: 20,
        }}
      >
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked((prev) => !prev)}
          color="lightgreen"
        />
        <Text style={{ color: "white" }}>Accept all terms and conditions</Text>
      </View>
      <Button
        textColor="white"
        onPress={() => {
          console.log("Registered");
        }}
        style={styles.btn}
        disabled={checked ? false : true}
      >
        Register
      </Button>
    </View>
  );
};

const Register = ({ navigation }) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />;
};

export default Register;

const styles = StyleSheet.create({
  inputs: {
    backgroundColor: "grey",
    marginHorizontal: 50,
    marginVertical: 10,
  },
  heading: {
    textAlign: "center",
    marginVertical: 20,
    color: "aliceblue",
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "tomato",
    alignSelf: "center",
    paddingVertical: 5,
    borderRadius: 50,
    width: "50%",
  },
});
