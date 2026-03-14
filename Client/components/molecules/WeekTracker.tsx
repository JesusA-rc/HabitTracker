import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

interface DayData {
  letter: string;
  number: number;
  isToday: boolean;
  status: 'completed' | 'none';
}

const getWeekDates = (): DayData[] => 
{
  const today = new Date();
  const currentDay = today.getDay();
  const distanceToMonday = currentDay === 0 ? -6 : 1 - currentDay;
  
  const monday = new Date(today);
  monday.setDate(today.getDate() + distanceToMonday);

  const days: DayData[] = [];
  const letters = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const date = new Date(monday);
  const actualMonday = monday.getDate();
  for (let i = 0; i < 7; i++) 
  {
    date.setDate(actualMonday + i);
    
    days.push({
      letter: letters[i],
      number: date.getDate(),
      isToday: date.toDateString() === today.toDateString(),
      status: 'none',
    });
  }

  return days;
};

export const WeekTracker = () => 
{
  const weekDays = getWeekDates();

  return (
    <View style={tw`flex-row justify-between items-center px-4 py-4 mb-4`}>
      {weekDays.map((day, index) => (
        <TouchableOpacity key={index} style={tw`items-center`}>
          <View style={[
            tw`w-8 h-8 rounded-full items-center justify-center mb-2`,
            day.isToday && tw`border border-stone-100`
          ]}>
            <Text style={[
              tw`text-sm font-medium`,
              day.isToday ? tw`text-stone-100` : tw`text-stone-400`
            ]}>
              {day.letter}
            </Text>
          </View>
          
          <Text style={[
            tw`text-xs mb-3 font-semibold`,
            day.isToday ? tw`text-stone-100` : tw`text-stone-500`
          ]}>
            {day.number}
          </Text>

          <View style={[
            tw`w-2 h-2 rounded-full`,
            tw`bg-stone-700`
          ]} />
        </TouchableOpacity>
      ))}
    </View>
  );
};
