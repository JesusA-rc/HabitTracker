import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const ACTIVITIES = [
  { id: '1', title: 'Ejercicio', icon: 'fitness-center', Family: MaterialIcons, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { id: '2', title: 'Programación', icon: 'code', Family: MaterialIcons, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { id: '3', title: 'Lectura', icon: 'book', Family: FontAwesome, color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { id: '4', title: 'Trabajo', icon: 'briefcase', Family: FontAwesome, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
];

export default function NewActivityModal() {
  const router = useRouter();
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={tw`flex-1`}>
      <Pressable 
        style={[tw`absolute inset-0 bg-black/40`]} 
        onPress={() => router.back()} 
      />
      
      <View style={[
        tw`absolute bottom-0 w-full bg-stone-900 rounded-t-[40px] px-6 pt-10`,
        { height: screenHeight * 1 }
      ]}>

        <View style={tw`absolute top-3 left-0 right-0 items-center`}>
          <View style={tw`w-12 h-1.5 bg-stone-700 rounded-full`} />
        </View>

        <View style={tw`flex-row justify-between items-center mb-8`}>
          <Text style={tw`text-stone-100 text-2xl font-bold`}>Nueva Actividad</Text>
          <TouchableOpacity 
            onPress={() => router.back()} 
            style={tw`bg-stone-800 p-2 rounded-full`}
          >
            <Ionicons name="close" size={24} color={tw.color('stone-400')} />
          </TouchableOpacity>
        </View>

        <Text style={tw`text-stone-400 text-sm mb-6`}>
          Selecciona una categoría para tu nuevo hábito o actividad:
        </Text>

        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={tw`flex-row flex-wrap justify-between pb-10`}
        >
          {ACTIVITIES.map((activity) => {
            const IconComponent = activity.Family;
            return (
              <TouchableOpacity 
                key={activity.id} 
                style={tw`w-[48%] bg-stone-800/50 rounded-3xl p-6 mb-4 items-center justify-center border border-stone-800`}
                activeOpacity={0.7}
              >
                <View style={[tw`w-16 h-16 rounded-full items-center justify-center mb-4`, tw`${activity.bg}`]}>
                  <IconComponent 
                    name={activity.icon as any} 
                    size={32} 
                    color={tw.color(activity.color.replace('text-', ''))} 
                  />
                </View>
                <Text style={tw`text-stone-100 font-semibold text-center text-lg`}>
                  {activity.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
