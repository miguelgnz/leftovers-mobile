import { View, Text, Image } from "react-native";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <View className="h-full w-80 rounded-2xl bg-white p-2 shadow-sm">
      <Image
        source={{ uri: product.image }}
        style={{
          width: 264,
          height: 180,
          borderRadius: 10,
          resizeMode: "cover",
          marginBottom: 10,
        }}
      />
      <Text className="mb-1.5 text-lg font-semibold">{product.store.name}</Text>
      <Text className="mb-1.5 text-sm">{product.name}</Text>
      <Text className="mb-1.5 text-sm">
        {`Pickup: ${new Date(product.pickupStart).toLocaleTimeString()}`}
      </Text>
      <Text className="mb-1.5 text-sm">
        {`$${product.price.toFixed(2)} ($${product.originalPrice.toFixed(2)})`}
      </Text>
    </View>
  );
}
