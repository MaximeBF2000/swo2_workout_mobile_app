import tw from 'twrnc'
import { View, Text, ScrollView, Pressable } from 'react-native'
import { map, get } from 'lodash'
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome
} from '@expo/vector-icons'
import { genId } from '../utils/string'

export const SeriesBox = ({ title, series, style }) => {
  const addSerie = () => {}

  return (
    <View style={[tw`bg-white shadow-md`, style]}>
      <Text
        style={tw`px-4 py-2 border border-gray-100 text-right bg-blue-600 text-white text-xl`}
      >
        {title}
      </Text>
      <ScrollView>
        {map(series, serie => (
          <View
            style={tw`flex-row justify-between items-center px-4 py-3 border-b border-gray-100`}
            key={genId()}
          >
            <View style={tw`flex-row items-center mr-16`}>
              <Text style={tw`text-xl`}>{get(serie, 'reps')}</Text>
              <Text style={tw`text-gray-600 mr-5`}> reps</Text>
              <Text style={tw`text-gray-600 mr-5`}> at</Text>
              <Text style={tw`text-xl`}>{get(serie, 'weight')}</Text>
              <Text style={tw`text-gray-600`}>
                {get(serie, 'weight') === 'PDC' ? '' : ' kg'}
              </Text>
            </View>
            <View style={tw`flex-row items-center justify-between flex-1`}>
              <FontAwesome name="trash-o" size={20} color="black" />
              <MaterialCommunityIcons
                name="arm-flex-outline"
                color="black"
                size={20}
              />
              <MaterialCommunityIcons
                name="note-edit"
                size={20}
                color="black"
              />
              <AntDesign name="edit" size={20} color="black" />
            </View>
          </View>
        ))}
        <Pressable onPress={addSerie} style={tw`p-2`}>
          <View style={tw`rounded overflow-hidden`}>
            <Text style={tw`text-center bg-gray-300/50 p-2`}>+</Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  )
}
