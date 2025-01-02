import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 items-center justify-center">
      <Stack.Screen
        options={{
          title: "",
          headerLeft: () => null,
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
        }}
      />
      <Text className="mt-4 text-center text-2xl font-bold text-gray-900">
        {`Product ${id}`}
      </Text>
    </View>
  );
}
