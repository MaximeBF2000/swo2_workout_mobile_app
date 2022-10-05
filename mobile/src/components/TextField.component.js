import tw from 'twrnc'
import { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

export const TextField = ({ style, ...props }) => {
  return (
    <TextInput
      clearButtonMode="always"
      style={[tw`border px-2 py-3`, style]}
      {...props}
    />
  )
}
