import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/common/themed-text";
import { ThemedView } from "@/components/common/themed-view";

export default function MoreScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Profile layout</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
