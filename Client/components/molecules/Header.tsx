import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { Avatar } from '../atoms/Avatar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
  name: string;
  photoUrl: string;
}

export const Header = ({ name, photoUrl }: HeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[tw`flex-row justify-between items-center px-6 pb-6 bg-[#3a4750] rounded-b-3xl`, { paddingTop: insets.top + 16 }]}>
      <View>
        <Text style={tw`text-stone-300 text-sm mb-1`}>Bienvenido de nuevo,</Text>
        <Text style={tw`text-stone-100 text-2xl font-bold tracking-tight`}>Hola {name}</Text>
      </View>
      <Avatar uri={photoUrl} size={14} />
    </View>
  );
};
