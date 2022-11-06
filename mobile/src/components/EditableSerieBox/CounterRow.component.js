import tw from 'twrnc'
import { View, Text } from 'react-native'
import { SignButton } from './SignButton.component'
import { TextField } from '../TextField.component'

export const CounterRow = ({
  onPlusOne,
  onMinusOne,
  onSuperPlus,
  onSuperMinus,
  text,
  value,
  onChangeText,
  style
}) => {
  return (
    <View style={[tw`flex-row h-10 justify-between items-center`, style]}>
      <SignButton sign="--" onPress={onSuperMinus} />
      <SignButton sign="-" onPress={onMinusOne} />
      <View style={tw`relative`}>
        <TextField
          style={tw`w-24`}
          textStyle={tw`rounded border-gray-500`}
          keyboardType="numeric"
          value={value}
          onChangeText={onChangeText}
          clearButtonMode="never"
        />
        <Text style={tw`absolute right-2 bottom-2 text-gray-500 text-base`}>
          {text}
        </Text>
      </View>
      <SignButton sign="+" onPress={onPlusOne} />
      <SignButton sign="++" onPress={onSuperPlus} />
    </View>
  )
}
