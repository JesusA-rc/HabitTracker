import React from 'react';
import { Image, ImageProps } from 'react-native';
import tw from 'twrnc';

interface AvatarProps extends Partial<ImageProps> {
  uri: string;
  size?: number;
}

export const Avatar = ({ uri, size = 12, style, ...props }: AvatarProps) => {
  return (
    <Image
      source={{ uri }}
      style={[tw`h-${size} w-${size} rounded-full bg-stone-700`, style]}
      {...props}
    />
  );
};
