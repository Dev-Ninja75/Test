import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title1}>h1</Text>

        <Text style={styles.title2}>h2</Text>

        <Text style={styles.title3}>h3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 80,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },

  containerTitle: {
    backgroundColor: "white",
  },

  title1: {
    fontSize: "100px",
  },

  title2: {
    textAlign: "center",
  },

  title3: {
    fontWeight: "bold",
  },
});
