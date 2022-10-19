import { isEmpty } from 'lodash'
import { useCallback } from 'react'
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

  const handleLogin = useCallback(async () => {
    try {
      await checkForCredentials({ email, password })

      const { user, error } = (await ApiClient.getUser(email, password)) ?? {}

      if (isEmpty(user) || error) return onErrors(['Invalid credentials'])

      await LocalPhoneStorage.setItem('user', user)
      dispatch('setUser', user)
    } catch (errors) {
      onErrors(errors)
    }
  }, [email, password, onErrors, dispatch])

  return handleLogin
}

export const useRegister = (
  { email, password, confirmPassword },
  onErrors = () => {}
) => {
  const { dispatch } = useStore()

  const handleRegister = useCallback(async () => {
    try {
      await checkForCredentials(
        { email, password, confirmPassword },
        { checkComfirmPassword: true }
      )

      const { user: hasUser } = (await ApiClient.getUser(email, password)) ?? {}
      if (!isEmpty(hasUser)) return onErrors(['User Already exists'])

      const { user } = (await ApiClient.registerUser(email, password)) ?? {}
      await LocalPhoneStorage.setItem('user', user)
      dispatch('setUser', user)
    } catch (errors) {
      if (Array.isArray(errors)) onErrors(errors)
    }
  }, [email, password, confirmPassword, onErrors, dispatch])

  return handleRegister
}

export const useLogout = () => {
  const { dispatch } = useStore()

  const logout = async () => {
    await LocalPhoneStorage.removeItem('user')
    dispatch('setUser', null)
  }

  return logout
}
