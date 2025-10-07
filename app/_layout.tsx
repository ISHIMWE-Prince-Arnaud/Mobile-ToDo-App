import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="./(tabs)/index.tsx" options={{ title: "Home" }} />
        <Stack.Screen
          name="./(tabs)/Settings.tsx"
          options={{ title: "Settings" }}
        />
      </Stack>
    </ThemeProvider>
  );
}
