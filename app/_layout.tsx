import { ThemeProvider } from "@/hooks/useTheme";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ConvexProvider client={convex}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />          
        </Stack>
      </ConvexProvider>
    </ThemeProvider>
  );
}
