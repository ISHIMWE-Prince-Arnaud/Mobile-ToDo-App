import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="./(tabs)/index.tsx" options={{ title: "Home" }} />
      <Stack.Screen
        name="./(tabs)/Settings.tsx"
        options={{ title: "Settings" }}
      />
    </Stack>
  );
}