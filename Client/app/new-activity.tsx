import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const ACTIVITIES = [
  { id: '1', title: 'Ejercicio', icon: 'fitness-center', Family: MaterialIcons, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { id: '2', title: 'Programación', icon: 'code', Family: MaterialIcons, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { id: '3', title: 'Lectura', icon: 'book', Family: FontAwesome, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { id: '4', title: 'Trabajo', icon: 'briefcase', Family: FontAwesome, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
];

export default function NewActivityModal() 
{
  const router = useRouter();

  return (
    <View style={tw`flex-1 bg-stone-900 px-6 pt-10`}>
      <View style={tw`flex-row justify-between items-center mb-8`}>
        <Text style={tw`text-stone-100 text-2xl font-bold`}>Nueva Actividad</Text>
        <TouchableOpacity onPress={() => router.back()} style={tw`bg-stone-800 p-2 rounded-full`}>
          <Ionicons name="close" size={24} color={tw.color('stone-400')} />
        </TouchableOpacity>
      </View>

      <Text style={tw`text-stone-400 text-sm mb-6`}>Selecciona una categoría para tu nuevo hábito o actividad:</Text>

      <ScrollView contentContainerStyle={tw`flex-row flex-wrap justify-between`}>
        {ACTIVITIES.map((activity) => {
          const IconComponent = activity.Family;
          return (
            <TouchableOpacity 
              key={activity.id} 
              style={tw`w-[48%] bg-stone-800 rounded-3xl p-5 mb-4 items-center justify-center`}
              activeOpacity={0.7}
            >
              <View style={[tw`w-14 h-14 rounded-full items-center justify-center mb-3`, tw`${activity.bg}`]}>
                <IconComponent name={activity.icon as any} size={28} color={tw.color(activity.color.replace('text-', ''))} />
              </View>
              <Text style={tw`text-stone-100 font-semibold text-center`}>{activity.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
