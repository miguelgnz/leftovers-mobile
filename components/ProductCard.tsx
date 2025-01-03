import { View, Text, Image, Pressable } from "react-native";
import { Product } from "@/types/product";
import { Link } from "expo-router";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link asChild href={`/product/${product.id}`}>
      <Pressable className="w-80 rounded-2xl bg-white p-2 shadow-sm">
        <Image
          source={{ uri: product.image }}
          style={{
            width: 264,
            height: 144,
            borderRadius: 10,
            resizeMode: "cover",
            marginBottom: 5,
          }}
        />
        <View className="flex flex-col">
          <Text className="mb-1 text-lg font-semibold">
            {product.store.name}
          </Text>
          <Text className="text-sm">{product.name}</Text>
          <Text className="text-xs">
            {`Pick up today: ${new Date(product.pickupStart).toLocaleTimeString()} - ${new Date(product.pickupEnd).toLocaleTimeString()}`}
          </Text>
          <View className="mt-3">
            <Text className="text-right text-lg font-semibold">
              {`${product.price.toLocaleString("es-GT", {
                style: "currency",
                currency: "GTQ",
              })}`}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
