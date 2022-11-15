import tw from 'twrnc'
import { useState } from 'react'
import { Text, ScrollView, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { get, map } from 'lodash'
import { useToggle } from '../hooks'

/**
 * Select component for React Native
 * @param {{ options: { label: string, value: any }[] }} props
 * @return JSX Component
 */
export const Select = ({
  style,
  containerStyle,
  options,
  onSelect = () => {},
  defaultOption
}) => {
  const [showList, toggleShowList] = useToggle()
  const [selectedOption, setSelectedOption] = useState(
    defaultOption ?? options?.[0]
  )

  const handleSelect = option => {
    setSelectedOption(option)
    onSelect(option)
  }

  const handleToggleSelect = () =>
    get(options, 'length') > 0 && toggleShowList()

  return (
    <Pressable style={[tw`relative py-0 overflow-visible`, containerStyle]}>
      <Pressable
        style={[style, tw`px-2 py-3 flex-row justify-between items-center`]}
        onPress={handleToggleSelect}
      >
        <Text style={selectedOption ? tw`text-gray-800` : tw`text-gray-300`}>
          {get(selectedOption, 'label', 'Select')}
        </Text>
        <FontAwesome name={showList ? 'caret-up' : 'caret-down'} size={24} />
      </Pressable>
      {showList && (
        <ScrollView
          style={tw`absolute max-h-64 top-1/2 mt-2 bg-white w-full rounded border border-gray-300`}
        >
          {map(options, (option, index) => (
            <Pressable
              key={get(option, 'value')}
              style={[
                tw`flex-row justify-between px-4 py-6 border-gray-300`,
                index !== get(options, 'length') - 1 && tw`border-b`
              ]}
              onPress={() => handleSelect(option)}
            >
              <Text>{get(option, 'label')}</Text>
              {get(selectedOption, 'value') === get(option, 'value') && (
                <Text>✓</Text>
              )}
            </Pressable>
          ))}
        </ScrollView>
      )}
    </Pressable>
  )
}
