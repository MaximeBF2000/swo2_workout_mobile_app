import tw from 'twrnc'
import { View, Text, Pressable } from 'react-native'

export const Checkbox = ({ checked = false, onToggle = () => {} }) => {
  return (
    <View>
      <Pressable onPress={onToggle}>
        <Text
          style={[
            tw`border rounded px-[6px] py-[3px]`,
            !checked && tw`text-transparent`
          ]}
        >
          ✓
        </Text>
      </Pressable>
    </View>
  )
}
