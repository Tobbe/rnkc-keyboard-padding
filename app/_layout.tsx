import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function RootLayout() {
  return (
    <KeyboardProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: styles.contentStyle,
        }}
      />
    </KeyboardProvider>
  );
}

const styles = StyleSheet.create({
  contentStyle: {
    backgroundColor: "lightpink",
  },
});
