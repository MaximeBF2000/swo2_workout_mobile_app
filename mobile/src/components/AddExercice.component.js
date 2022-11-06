import tw from 'twrnc'
import { View, Text, Pressable } from 'react-native'
import { get, map, head } from 'lodash'
import { TextField } from './TextField.component'
import { Button } from './Button.component'
import { Select } from './Select.component'
import { useFormState, useOnMount } from '../hooks'
import { ApiClient, apiUris, useAxiosSWR } from '../features/apiClient'
import { useStore } from '../features/store'

export const AddExercice = ({ returnToAllExercice = () => {} }) => {
  const { user } = useStore()
  const { data, mutate } = useAxiosSWR(apiUris.catagories())
  const categories = map(get(data, 'categories'), category => ({
    label: get(category, 'name'),
    value: get(category, 'id')
  }))
  const [{ name, description, category }, changeInput] = useFormState({
    name: '',
    description: '',
    category: head(categories)
  })

  useOnMount(() => mutate(apiUris.catagories()))

  const textfieldStyle = tw`border-0 py-4 bg-white rounded`

  const createExercice = async () => {
    await ApiClient.createExercices({
      categoryId: get(category, 'value'),
      userId: get(user, 'id'),
      name,
      description
    })
  }

  return (
    <View style={tw`px-4`}>
      <Pressable onPress={returnToAllExercice}>
        <Text style={tw`my-4 ml-auto text-xl`}>╳</Text>
      </Pressable>
      <Text style={tw`mt-16 mb-8 text-3xl`}>Create a new exercice</Text>
      <TextField
        style={tw`mb-4`}
        textStyle={textfieldStyle}
        placeholder="Exercice name"
        value={name}
        onChangeText={changeInput('name')}
      />
      <TextField
        style={tw`mb-4`}
        textStyle={textfieldStyle}
        placeholder="Exercice description"
        value={description}
        onChangeText={changeInput('description')}
      />
      <Select
        style={[textfieldStyle, tw`mb-12`]}
        containerStyle={tw`z-10`}
        options={categories}
        onSelect={changeInput('category')}
        defaultOption={category}
      />
      <Button title="Create exercice" onPress={createExercice} />
    </View>
  )
}
