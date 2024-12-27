import { Product } from "@/types/product";
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
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
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        {discoverItem.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
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
