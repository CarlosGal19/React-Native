import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabsLayout({ children }) {
  return (
    <>
        <Tabs screenOptions={{
            headerShown: false
        }}>
            <Tabs.Screen name="index" options={{
                title: "Home"
            }} />
            <Tabs.Screen name="About" />
        </Tabs>
    </>
  );
}
