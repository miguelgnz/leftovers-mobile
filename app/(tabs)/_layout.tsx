import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/tab-bar-icon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { useTranslation } from "react-i18next";

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? "light";
  const { t } = useTranslation();

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
          title: t("discoverScreen"),
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
          title: t("profileScreen"),
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
