import { Stack } from "expo-router";
import { useThemeColor } from "@/hooks/common/useThemeColor";

export default function CategoriesLayout() {
  const tintColor = useThemeColor({}, "tint");

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "More",
          headerTintColor: tintColor,
        }}
      />
    </Stack>
  );
}
