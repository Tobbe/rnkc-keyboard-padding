import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Text>Foobar</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: "lightpink",
    flexGrow: 1,
  },
});
