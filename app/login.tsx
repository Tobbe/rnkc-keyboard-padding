import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export default function AwareScrollView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bottomOffset, setBottomOffset] = useState(30);

  return (
    <KeyboardAwareScrollView
      bottomOffset={bottomOffset}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.header}>Log In</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        facilisis, lacus eget fringilla semper, libero diam mattis nisl, in
        molestie lorem nisl at ligula. Curabitur mollis ipsum ultricies semper
        vehicula. Suspendisse mollis nisl ac felis eleifend, sed laoreet urna
        porttitor. Donec quis tempor erat, non lobortis nisl. Integer vitae
        elementum sapien. Proin nulla lorem, placerat id orci non, fermentum
        dapibus enim. Integer porttitor at quam id mattis. Mauris id dictum
        quam. Sed eu lectus at lorem rutrum consectetur. Maecenas tincidunt
        felis vitae ex dapibus, nec dignissim tortor consequat.
      </Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setEmail(text);
        }}
        value={email}
        placeholder="email@example.com"
        keyboardType="email-address"
        textContentType="emailAddress"
        inputMode="email"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setBottomOffset(90);
          setPassword(text);
        }}
        value={password}
        // keyboardType={showPassword ? "visible-password" : "default"}
        secureTextEntry={true}
        textContentType="password"
        autoCapitalize="none"
        autoComplete={"current-password"}
        autoCorrect={false}
        onBlur={(e) => {
          setBottomOffset(30);
        }}
        onFocus={(e) => {
          console.log("set bottom offset");
          setBottomOffset(90);
        }}
      />
      <Pressable style={styles.button} onPress={() => console.log("log in")}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
    </KeyboardAwareScrollView>
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
  content: {
    paddingTop: 72,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    color: "#02634f",
    borderColor: "#02634f",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    alignSelf: "stretch",
    height: 48,
    backgroundColor: "#fffdfa",
    paddingHorizontal: 10,
    paddingTop: 9,
    paddingBottom: 11,
    fontSize: 16,
    marginTop: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
  },
});
