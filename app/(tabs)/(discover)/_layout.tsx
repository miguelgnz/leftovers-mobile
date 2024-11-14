import { Stack } from "expo-router";
import { useThemeColor } from "@/hooks/common/useThemeColor";

export default function CategoriesLayout() {
  const tintColor = useThemeColor({}, "tint");

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Discover",
          headerTintColor: tintColor,
        }}
      />
    </Stack>
  );
}
