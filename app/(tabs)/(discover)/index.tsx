import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DiscoverItem from "@/components/DiscoverItem";

import discoverResponse from "@/mocks/discoverResponse.json";

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={{ marginTop: insets.top, marginBottom: insets.bottom }}>
      {discoverResponse.map((discoverItem) => {
        return (
          <DiscoverItem key={discoverItem.id} discoverItem={discoverItem} />
        );
      })}
    </ScrollView>
  );
}
