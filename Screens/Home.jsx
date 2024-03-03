import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { Button, Appbar, Headline, Avatar } from "react-native-paper";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";

const Main = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "silver" }}>
      {/* **********************  APPBAR  ***************************** */}

      <Appbar style={{ backgroundColor: "black" }}>
        <Appbar.Action
          icon={"heart"}
          iconColor="red"
          onPress={() => console.log("Heart")}
        />
        <Appbar.Content title="Sourav" titleStyle={{ color: "white" }} />

        <Appbar.Action
          icon={"account-circle-outline"}
          iconColor="white"
          onPress={() => console.log("Account")}
        />
        <Appbar.Action
          icon={"camera-outline"}
          iconColor="white"
          onPress={() => console.log("Camera")}
        />
      </Appbar>

      {/* *********************  AVATAR  **********************8888 */}

      <TouchableOpacity onPress={() => console.log("Image Pressed")}>
        <Avatar.Image
          source={{ uri: "https://www.w3schools.com/howto/img_avatar.png" }}
          size={150}
          style={{ alignSelf: "center", margin: 40 }}
        />
      </TouchableOpacity>

      <Button
        textColor="white"
        style={{
          backgroundColor: "blue",
          marginHorizontal: 60,
          marginBottom: 30,
          borderRadius: 30,
        }}
        onPress={() => navigation.navigate("Register")}
        // onPress={() => console.log("Click Me")}
      >
        Click Me
      </Button>

      <Headline
        style={{ textAlign: "center", marginTop: 20, fontWeight: "bold" }}
      >
        About Me
      </Headline>
      <Text
        style={{
          textAlign: "center",
          width: "70%",
          alignSelf: "center",
          marginTop: 20,
          fontSize: 18,
        }}
      >
        {" "}
        My name is Sourav. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Modi similique nostrum, voluptatum dolor illo consequatur tempora
        tempore maxime corrupti impedit?{" "}
      </Text>
    </View>
  );
};

const Home = ({ navigation }) => {
  return <SafeAreaViewAndroid navigation={navigation} Component={Main} />;
};

export default Home;
