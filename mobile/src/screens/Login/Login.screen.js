import tw from 'twrnc'
import { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Button, TextField } from '../../components'
import { useDisplayError, useFormState, useToggle } from '../../hooks'
import { useStore } from '../../features/store'
import { useLogin, useRegister } from './login.utils'

export const LoginScreen = () => {
  const [{ email, password, confirmPassword }, changeInput] = useFormState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [registerMode, toggleRegisterMode] = useToggle()
  const [displayErrors, errorComponent] = useDisplayError()
  const handleLogin = useLogin({ email, password }, displayErrors)
  const handleRegister = useRegister(
    { email, password, confirmPassword },
    displayErrors
  )

  const textfieldStyle = tw`border-0 py-4 bg-white rounded`

  return (
    <View style={tw`flex-1 justify-center px-4 bg-gray-200`}>
      <View style={tw`relative`}>
        <Text
          style={tw`absolute left-16 top-1 text-8xl font-black text-blue-800`}
        >
          SWO
        </Text>
        <Text style={tw`text-center text-8xl font-black text-blue-600`}>
          SWO
        </Text>
        <Text style={tw`mb-20 text-center text-gray-700 italic`}>
          Simply working out, for advanced lifters
        </Text>
      </View>
      <TextField
        placeholder="Email"
        style={tw`mb-8`}
        textStyle={textfieldStyle}
        value={email}
        onChangeText={changeInput('email')}
      />
      <TextField
        placeholder="Password"
        style={registerMode ? tw`mb-8` : tw`mb-14`}
        textStyle={textfieldStyle}
        value={password}
        onChangeText={changeInput('password')}
        secure
      />
      {registerMode && (
        <TextField
          placeholder="Comfirm Password"
          style={tw`mb-14`}
          textStyle={textfieldStyle}
          value={confirmPassword}
          onChangeText={changeInput('confirmPassword')}
          secure
        />
      )}
      <Button
        title={registerMode ? 'REGISTER' : 'LOGIN'}
        style={tw`w-full mb-12`}
        onPress={registerMode ? handleRegister : handleLogin}
      />
      <View style={tw`w-full flex-row items-center`}>
        <Text style={tw`mr-0`}>
          {registerMode
            ? 'Already have an account ? '
            : "Don't have an account ? "}
        </Text>
        <Button
          title={registerMode ? 'Login here' : 'Register here'}
          style={tw`w-full bg-transparent p-0`}
          textStyle={tw`text-blue-600 text-left`}
          onPress={toggleRegisterMode}
        />
      </View>
      {errorComponent}
    </View>
  )
}
