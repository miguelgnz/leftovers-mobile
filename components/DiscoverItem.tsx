import { Product } from "@/types/product";
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductCard from "@/components/ProductCard";

interface DiscoverItemProps {
  discoverItem: {
    id: string;
    name: string;
    products: Product[];
  };
}

export default function DiscoverItem({ discoverItem }: DiscoverItemProps) {
  return (
    <View className="flex gap-2 pl-2">
      <Text className="text-2xl">{discoverItem.name}</Text>

      <FlatList
        data={discoverItem.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        horizontal
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 5,
    gap: 20,
    paddingTop: 5,
    paddingBottom: 25,
  },
});
