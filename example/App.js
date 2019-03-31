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
    Pinger.addListener((sequenceNumber, latency) => {
      console.log(sequenceNumber, latency);
      setState({
        sequenceNumber,
        latency
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
          #{state.sequenceNumber} {state.latency}msec
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
