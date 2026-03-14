import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc';
import { Header } from '../../components/molecules/Header';
import { WeekTracker } from '../../components/molecules/WeekTracker';

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 bg-stone-900`}>
      <Header name="Adrián" photoUrl="https://images.steamusercontent.com/ugc/930431644832714552/5F7B156754EC7FBCB0EC7628963216B5E146BDA5/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" />
      <WeekTracker />
      <ScrollView style={tw`flex-1 px-6 pt-2`}>
        <View style={tw`bg-stone-800 rounded-3xl p-6 mb-4`}>
          <Text style={tw`text-stone-100 text-lg font-bold mb-2`}>Tu progreso de hoy</Text>
          <Text style={tw`text-stone-400 text-sm`}>Aún no hay hábitos. ¡Empieza a construir tu rutina!</Text>
        </View>

        <View style={tw`flex-row justify-between mb-4`}>
          <View style={tw`flex-1 bg-stone-800 rounded-3xl p-6 mr-2`}>
            <Text style={tw`text-stone-100 font-bold text-center`}>Hábitos</Text>
            <Text style={tw`text-orange-500 text-2xl font-black text-center mt-2`}>0</Text>
          </View>
          <View style={tw`flex-1 bg-stone-800 rounded-3xl p-6 ml-2`}>
            <Text style={tw`text-stone-100 font-bold text-center`}>Racha</Text>
            <Text style={tw`text-orange-500 text-2xl font-black text-center mt-2`}>0 🔥</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
