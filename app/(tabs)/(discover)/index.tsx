import { FlatList, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DiscoverItem from "@/components/DiscoverItem";

import discoverResponse from "@/mocks/discoverResponse.json";

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        marginTop: insets.top,
      }}
    >
      <FlatList
        data={discoverResponse}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DiscoverItem discoverItem={item} />}
      />
    </View>
  );
}
