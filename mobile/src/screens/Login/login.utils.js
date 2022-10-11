import { isEmpty } from 'lodash'
import { ApiClient } from '../../features/apiClient'
import { checkCreds } from '../../features/auth'
import { LocalPhoneStorage } from '../../features/localPhoneStorage'
import { useStore } from '../../features/store'

const checkForCredentials = (creds, options) => {
  return new Promise(async (resolve, reject) => {
    const errors = checkCreds(creds, options)
    if (errors.length === 0) return resolve()

    reject(errors)
  })
}

export const useLogin = ({ email, password }, onErrors = () => {}) => {
  const { dispatch } = useStore()

  const handleLogin = async () => {
    try {
      await checkForCredentials({ email, password })

      const user = await ApiClient.getUserByEmail(email)
      if (isEmpty(user)) return onErrors(['User does not exist'])

      await LocalPhoneStorage.setItem('user', user)
      dispatch('setUser', user)
    } catch (errors) {
      onErrors(errors)
    }
  }

  return handleLogin
}

export const useRegister = (
  { email, password, confirmPassword },
  onErrors = () => {}
) => {
  const { dispatch } = useStore()

  const handleRegister = async () => {
    try {
      await checkForCredentials(
        { email, password, confirmPassword },
        { checkComfirmPassword: true }
      )

      const hasUser = await ApiClient.getUserByEmail(email)
      if (!isEmpty(hasUser)) return onErrors(['User Already exists'])

      const user = await ApiClient.registerUser(email, password)
      await LocalPhoneStorage.setItem('user', user)
      dispatch('setUser', user)
      console.warn({ user })
    } catch (errors) {
      onErrors(errors)
    }
  }

  return handleRegister
}
