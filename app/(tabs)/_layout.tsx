import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/tab-bar-icon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(discover)"
        options={{
          title: "discoverScreen",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "profileScreen",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "body" : "body-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
