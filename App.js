import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaProvider  } from 'react-native-safe-area-context';
import Main from './components/Main';

export default function App() {

  return (
    <SafeAreaProvider >
      <StatusBar />
      <Main />
    </SafeAreaProvider >
  );
}
