import React from 'react';
import { Tabs as ExpoTabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';

export default function TabLayout() {
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
    </ExpoTabs>
  );
}
