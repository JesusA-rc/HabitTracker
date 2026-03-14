import React from 'react';
import { Tabs as ExpoTabs, useRouter } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

export default function TabLayout() {
  const router = useRouter();

  return (
    <ExpoTabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: tw`bg-stone-950 border-t-0`,
        tabBarActiveTintColor: tw.color('orange-500'),
        tabBarInactiveTintColor: tw.color('stone-500'),
      }}>
      <ExpoTabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <FontAwesome size={26} name="home" color={color} />,
        }}
      />
      <ExpoTabs.Screen
        name="new-activity-tab"
        options={{
          title: 'Añadir',
          tabBarIcon: ({ color }) => <Ionicons name="add-circle" size={28} color={color} />,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            router.push('/new-activity');
          },
        }}
      />
    </ExpoTabs>
  );
}
