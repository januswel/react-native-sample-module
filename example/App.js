import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SampleModule from "react-native-sample-module";

export default () => {
  console.log(SampleModule);
  console.log(SampleModule.getConstants());
  SampleModule.sampleMethod("google.com", () => {
    console.log("called");
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>foo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
