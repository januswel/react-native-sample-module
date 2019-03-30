import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";
import Pinger from "react-native-sample-module";

export default () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    Pinger.addListener((sequenceNumber, delta) => {
      console.log(sequenceNumber, delta);
      setState({
        sequenceNumber,
        delta
      });
    });
  });

  console.log(state);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>ping to google.com</Text>
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
      {state && (
        <Text style={styles.text}>
          #{state.sequenceNumber} {state.delta}msec
        </Text>
      )}
    </SafeAreaView>
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
