import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.containerTitle}>
          <Text style={[styles.title1, styles.text]}>h1</Text>

          <Text style={[styles.title2, styles.text]}>h2</Text>

          <Text style={[styles.title3, styles.text]}>h3</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },

  containerTitle: {
    backgroundColor: "white",
    margin: 80,
  },

  title1: {
    fontSize: "100px",
    marginVertical: 80,
  },

  title2: {
    textAlign: "center",
    marginVertical: 80,
  },

  title3: {
    fontWeight: "bold",
  },

  text: {
    marginVertical: 80,
  },
});
