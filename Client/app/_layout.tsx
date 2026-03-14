import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import tw from 'twrnc';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <View style={tw`flex-1 bg-stone-900`}>
        <StatusBar style="light" />
        <Stack screenOptions={{ headerShown: false, contentStyle: tw`bg-stone-900` }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </View>
    </SafeAreaProvider>
  );
}
