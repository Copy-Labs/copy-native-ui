import { Stack } from 'expo-router';

export default function DemoScreen() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      contentStyle: { flex: 1 },
      gestureEnabled: true,
      headerBackButtonDisplayMode: "default",
    }}>
      <Stack.Screen name="index" />
    </Stack>
  )
}
