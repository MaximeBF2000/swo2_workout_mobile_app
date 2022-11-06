import tw from 'twrnc'
import { TextField } from '../TextField.component'

export const NoteField = ({ value, onTextChange = () => {} }) => {
  return (
    <TextField
      textStyle={tw`border-gray-500 rounded h-32`}
      placeholder="Note on your serie"
      numberOfLines={8}
      value={value}
      onChangeText={onTextChange}
    />
  )
}
