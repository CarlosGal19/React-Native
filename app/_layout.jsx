import { View } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function App() {

    const insets = useSafeAreaInsets();

    return (
        <>
            <SafeAreaProvider >
                <StatusBar />
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: insets.top,
                        paddingBottom: insets.bottom,
                        paddingLeft: insets.left,
                        paddingRight: insets.right,
                        backgroundColor: 'white'
                    }}>
                    < Slot />
                </View>
            </SafeAreaProvider >
        </>
    );
}
