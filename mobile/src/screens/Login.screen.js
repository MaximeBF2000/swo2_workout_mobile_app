import tw from 'twrnc'
import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Button, ErrorDisplayer, TextField } from '../components'
import { useFormState, useToggle } from '../hooks'
import { useStore } from '../features/store/store.context'
import { checkCreds } from '../features/auth'

export const LoginScreen = () => {
  const { showLogin, dispatch } = useStore()
  const [errorComponent, setErrorComponent] = useState(<></>)
  const [registerMode, toggleRegisterMode] = useToggle()
  const [{ email, password, confirmPassword }, changeInput] = useFormState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const textfieldStyle = tw`border-0 py-4 bg-white rounded`

  const checkForCredentials = (successCallback, options = {}) => {
    const errors = checkCreds({ email, password, confirmPassword }, options)
    if (!errors) {
      successCallback()
    } else {
      setErrorComponent(<ErrorDisplayer errors={errors} />)
      setTimeout(() => setErrorComponent(<></>), 1000 * errors.length)
    }
  }

  const handleLogin = () => {
    checkForCredentials(() => dispatch('toggleShowLogin'))
    // SET USER IN STORE AND IN ASYNC STORAGE
  }

  const handleRegister = () => {
    checkForCredentials(() => console.warn('Register'), {
      checkComfirmPassword: true
    })
    // CREATE USER IN DB, SET USER IN STORE AND IN ASYNC STORAGE
  }

  useEffect(() => {
    // CHECK IF USER EXISTS IN ASYNC STORAGE
    // IF (USER IN ASYNC STORAGE) SET USER IN STORE
  }, [])

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
        style={[textfieldStyle, tw`mb-8`]}
        value={email}
        onChangeText={changeInput('email')}
      />
      <TextField
        placeholder="Password"
        style={[textfieldStyle, registerMode ? tw`mb-8` : tw`mb-14`]}
        value={password}
        onChangeText={changeInput('password')}
      />
      {registerMode && (
        <TextField
          placeholder="Comfirm Password"
          style={[textfieldStyle, tw`mb-14`]}
          value={confirmPassword}
          onChangeText={changeInput('confirmPassword')}
        />
      )}
      <Button
        title={registerMode ? 'REGISTER' : 'LOGIN'}
        style={tw`w-full mb-12`}
        onPress={registerMode ? handleRegister : handleLogin}
      />
      {/* <Text style={tw`bg-gray-900 text-white p-2 mb-2`}>
        {JSON.stringify({ showLogin, dispatch })}
      </Text> */}
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
