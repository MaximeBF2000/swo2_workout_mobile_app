import tw from 'twrnc'
import { View, Text, ScrollView, Pressable } from 'react-native'
import { map, get, isArray, isEmpty } from 'lodash'
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome
} from '@expo/vector-icons'
import { genId } from '../utils/string'
import { useStore } from '../features/store'

export const SeriesBox = ({
  title,
  series,
  style,
  onShowNote = () => {},
  onToggleSpoted = () => {},
  onEditSerie = () => {},
  onAddSerie = () => {}
}) => {
  const { inEditMode } = useStore()

  const handleShowNote = note => {
    if (note) onShowNote(note)
  }

  return (
    <>
      <View style={[tw`bg-white shadow-md`, style]}>
        <Text
          style={tw`px-4 py-2 border border-gray-100 text-right bg-blue-600 text-white text-xl`}
        >
          {title}
        </Text>
        <ScrollView>
          {isEmpty(series) && (
            <View style={tw`mt-8 mb-2 px-2`}>
              <Text style={tw`mb-4 text-7xl text-center`}>🏋️</Text>
              <Text style={tw`mb-2 text-xl font-bold text-center`}>
                No Series done today
              </Text>
              <Text style={tw`text-base text-center`}>
                Click the button below to start
              </Text>
            </View>
          )}
          {isArray(series) &&
            !isEmpty(series) &&
            map(series, serie => (
              <View
                style={tw`flex-row justify-between items-center px-4 py-3 border-b border-gray-100`}
                key={genId()}
              >
                <View style={tw`flex-row items-center mr-14`}>
                  <Text style={tw`text-xl w-10`}>{get(serie, 'reps')}</Text>
                  <Text style={tw`text-gray-600 mr-5`}> reps</Text>
                  <Text style={tw`text-gray-600 mr-5`}> at</Text>
                  <Text style={tw`text-xl w-10`}>{get(serie, 'weight')}</Text>
                  <Text style={tw`text-gray-600`}>
                    {get(serie, 'weight') === 'PDC' ? '' : ' kg'}
                  </Text>
                </View>
                <View style={tw`flex-row items-center justify-between flex-1`}>
                  {inEditMode && (
                    <FontAwesome name="trash-o" size={20} color="black" />
                  )}
                  <Pressable
                    onPress={() => onToggleSpoted(get(serie, 'spoted'))}
                  >
                    <MaterialCommunityIcons
                      name={
                        get(serie, 'spoted') ? 'arm-flex' : 'arm-flex-outline'
                      }
                      color={get(serie, 'spoted') ? 'orange' : 'black'}
                      size={20}
                    />
                  </Pressable>
                  <Pressable onPress={() => handleShowNote(get(serie, 'note'))}>
                    <FontAwesome
                      name={
                        get(serie, 'note') ? 'sticky-note' : 'sticky-note-o'
                      }
                      size={20}
                      color="black"
                    />
                  </Pressable>
                  <Pressable onPress={() => onEditSerie(serie)}>
                    <AntDesign name="edit" size={20} color="black" />
                  </Pressable>
                </View>
              </View>
            ))}
          <Pressable onPress={onAddSerie} style={tw`p-2`}>
            <View style={tw`rounded overflow-hidden`}>
              <Text style={tw`text-center bg-gray-300/50 p-2`}>+</Text>
            </View>
          </Pressable>
        </ScrollView>
      </View>
    </>
  )
}
