import React from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Image
        style={styles.image}
        source={require("../assets/images/onboarding-1.png")}
      />
      <View style={styles.spacerContainer}>
        <View>
          <Text style={styles.header}>Index Page</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => console.log("sign up")}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 24,
    borderRadius: 4,
    backgroundColor: "#02634f",
    height: 54,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    userSelect: "none",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 32,
    maxWidth: 640,
  },
  spacerContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  buttonContainer: {
    marginTop: 24,
  },
});
