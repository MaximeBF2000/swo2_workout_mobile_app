import tw from 'twrnc'
import { View, TextInput, Pressable } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { useToggle } from '../hooks'

export const TextField = ({
  style,
  textStyle,
  value,
  onChangeText = () => {},
  placeholder,
  clearButtonMode,
  autoCapitalize,
  secure,
  numberOfLines = 1,
  keyboardType,
  ...props
}) => {
  const [showEntry, toggleShowEntry] = useToggle()
  const [focusing, toggleFocusing] = useToggle()

  return (
    <View style={[tw`relative`, style]}>
      <TextInput
        style={[tw`border px-2 py-3`, textStyle]}
        value={value}
        onChangeText={onChangeText}
        clearButtonMode={clearButtonMode ?? 'always'}
        autoCapitalize={autoCapitalize ?? 'none'}
        secureTextEntry={secure && !showEntry}
        onFocus={() => toggleFocusing(true)}
        onBlur={() => toggleFocusing(false)}
        placeholder={placeholder}
        numberOfLines={numberOfLines}
        multiline={numberOfLines > 1}
        keyboardType={keyboardType}
        {...props}
      />
      {secure && focusing && (
        <Pressable
          onPress={toggleShowEntry}
          style={[tw`absolute right-8 top-0 bottom-0 justify-center`]}
        >
          <FontAwesome5
            name={showEntry ? 'eye-slash' : 'eye'}
            size={20}
            color="gray"
          />
        </Pressable>
      )}
    </View>
  )
}
