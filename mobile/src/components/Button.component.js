import tw from 'twrnc'
import { Text, Pressable } from 'react-native'
import React from 'react'

export const Button = ({ onPress = () => {}, title, style, textStyle }) => {
  return (
    <Pressable onPress={onPress} style={[tw`bg-blue-600 p-4 rounded`, style]}>
      <Text style={[tw`text-white text-center`, textStyle]}>{title}</Text>
    </Pressable>
  )
}
