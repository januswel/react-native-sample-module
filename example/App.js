import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Pinger from "react-native-sample-module";

Pinger.addListener((sequenceNumber, delta) => {
  console.log(sequenceNumber, delta);
});

export default () => {
  return (
    <View style={styles.container}>
      <Button
        title="Start"
        onPress={() => {
          Pinger.start("google.com");
        }}
      />
      <Button
        title="Stop"
        onPress={() => {
          Pinger.stop();
        }}
      />
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
