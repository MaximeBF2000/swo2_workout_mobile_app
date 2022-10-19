import tw from 'twrnc'
import { useState } from 'react'
import { includes } from 'lodash'
import { View, Text, Pressable } from 'react-native'
import { TextField } from './TextField.component'

export const EditableTraining = ({
  titlePlaceholder,
  descriptionPlaceholder,
  defaultTitle = '',
  defaultDescription = '',
  hideCloseButton = false,
  actions = ['add', 'edit', 'delete'],
  onAdd = () => {},
  onEdit = () => {},
  onDelete = () => {},
  onClose = () => {}
}) => {
  const [title, setTitle] = useState(defaultTitle)
  const [description, setDescription] = useState(defaultDescription)

  const onPressFunc = onPressFn => () => onPressFn({ title, description })
  const handleAdd = onPressFunc(onAdd)
  const handleEdit = onPressFunc(onEdit)
  const handleDelete = onPressFunc(onDelete)

  return (
    <View
      style={tw`relative flex-row justify-between items-center bg-white py-4 px-8 border-b border-gray-100`}
    >
      <View style={tw`flex-1 mr-12`}>
        <TextField
          value={title}
          onChangeText={setTitle}
          placeholder={titlePlaceholder}
          style={tw`mb-2`}
          textStyle={tw`font-medium w-full border-0 border-b border-gray-300`}
        />
        <TextField
          value={description}
          onChangeText={setDescription}
          placeholder={descriptionPlaceholder}
          textStyle={tw`font-medium w-full border-0 border-b border-gray-300`}
        />
      </View>
      <View>
        {includes(actions, 'add') && (
          <Pressable style={tw`mb-2`} onPress={handleAdd}>
            <Text
              style={tw`text-blue-500 text-3xl w-8 h-8 rounded-full justify-center items-center`}
            >
              +
            </Text>
          </Pressable>
        )}
        {includes(actions, 'edit') && (
          <Pressable onPress={handleEdit}>
            <Text style={tw`text-blue-500 text-base`}>✏️</Text>
          </Pressable>
        )}
        {includes(actions, 'delete') && (
          <Pressable onPress={handleDelete}>
            <Text
              style={tw`text-red-500 text-3xl w-8 h-8 rounded-full justify-center items-center`}
            >
              x
            </Text>
          </Pressable>
        )}
      </View>
      {!hideCloseButton && (
        <Pressable onPress={onClose} style={tw`absolute top-1 right-2`}>
          <Text style={tw`text-lg`}>&times;</Text>
        </Pressable>
      )}
    </View>
  )
}
