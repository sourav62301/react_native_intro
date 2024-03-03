import { View, Platform, StatusBar, SafeAreaView } from "react-native";

import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";

const SafeAreaViewAndroid = ({ Component, ...rest }) => {
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "silver",
        flex: 1,
      }}
    >
      <SafeAreaView>
        <Component {...rest} />
      </SafeAreaView>
    </View>
  );
};

export default SafeAreaViewAndroid;
