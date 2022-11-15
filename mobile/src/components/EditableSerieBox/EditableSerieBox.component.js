import tw from 'twrnc'
import { useState } from 'react'
import { Text, View } from 'react-native'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import { CounterRow } from './CounterRow.component'
import { CloseButton } from './CloseButton.component'
import { NoteField } from './NoteField.component'
import { Button } from '../Button.component'
import { Checkbox } from '../Checkbox.component'
import { useToggle } from '../../hooks'
import { includes } from 'lodash'

export const EditableSerieBox = ({
  modalTitle = '',
  defaults = {},
  onSave = () => {},
  onDelete = () => {},
  onClose = () => {},
  // eslint-disable-next-line no-inline-comments
  actions = ['save'] // ['save', 'delete']
}) => {
  const {
    reps: defaultReps = 10,
    weight: defaultWeight = 0,
    note: defaultNote = '',
    spoted: defaultSpoted = false,
    id,
    ...defaultSerie
  } = defaults ?? {}

  const [reps, setReps] = useState(defaultReps)
  const [weight, setWeight] = useState(defaultWeight)
  const [note, setNote] = useState(defaultNote)
  const [spoted, toggleSpoted] = useToggle(defaultSpoted)

  const onPlus =
    (setFn, value = 1) =>
    () =>
      setFn(prev => parseFloat(prev) + value)

  const onMinus =
    (setFn, value = 1) =>
    () =>
      setFn(prev => parseFloat(prev) - value)

  const onChange = setFn => value => setFn(value)

  const handleSave = () =>
    onSave({ ...defaultSerie, id, reps, weight, note, spoted })
  const handleDelete = () => onDelete(id)

  return (
    <Animated.View
      style={tw`absolute bottom-0 left-0 right-0 bg-white p-8 border-t border-gray-300 z-10 shadow-lg`}
      entering={SlideInDown.duration(200)}
      exiting={SlideOutDown.duration(200)}
    >
      <CloseButton onClose={onClose} />
      <Text style={tw`mb-8 text-2xl`}>{modalTitle}</Text>
      <CounterRow
        text="REPS"
        style={tw`mb-4`}
        value={reps.toString()}
        onPlusOne={onPlus(setReps)}
        onSuperPlus={onPlus(setReps, 2)}
        onMinusOne={onMinus(setReps)}
        onSuperMinus={onMinus(setReps, 2)}
        onChangeText={onChange(setReps)}
      />
      <CounterRow
        text="Kg"
        style={tw`mb-8`}
        value={weight?.toString()}
        onPlusOne={onPlus(setWeight)}
        onSuperPlus={onPlus(setWeight, 2.5)}
        onMinusOne={onMinus(setWeight)}
        onSuperMinus={onMinus(setWeight, 2.5)}
        onChangeText={onChange(setWeight)}
      />
      <NoteField value={note} onTextChange={setNote} />
      <View style={tw`flex-row my-4 items-center`}>
        <Checkbox checked={spoted} onToggle={toggleSpoted} />
        <Text style={tw`ml-2`}>Spoted ?</Text>
      </View>
      <View style={tw`flex-row`}>
        {includes(actions, 'save') && (
          <Button title="Save" style={tw`mt-8 px-8`} onPress={handleSave} />
        )}
        {includes(actions, 'delete') && (
          <Button
            title="Delete"
            style={tw`ml-3 mt-8 px-8, bg-red-600`}
            onPress={handleDelete}
          />
        )}
      </View>
    </Animated.View>
  )
}
