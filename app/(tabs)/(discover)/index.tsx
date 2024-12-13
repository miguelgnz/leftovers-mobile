import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Home() {
  const insets = useSafeAreaInsets();

  console.log("Bottom inset:", insets.bottom, "Top inset:", insets.top);
  return (
    <View
      className={`flex-1 items-center justify-center`}
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
