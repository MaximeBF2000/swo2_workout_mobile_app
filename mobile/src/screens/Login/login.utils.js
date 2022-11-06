import { useCallback } from 'react'
import { isEmpty, get, map } from 'lodash'
import { ApiClient, apiUris } from '../../features/apiClient'
import { checkCreds } from '../../features/auth'
import { LocalPhoneStorage } from '../../features/localPhoneStorage'
import { useStore } from '../../features/store'
import BASE_EXERCICES from './BASE_EXERCICES.json'
import { useSWRConfig } from 'swr'

const EMPTY_OBJECT = {}

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

      const { user, error } =
        (await ApiClient.getUser(email, password)) ?? EMPTY_OBJECT

      if (isEmpty(user) || error) return onErrors(['Invalid credentials'])

      await LocalPhoneStorage.setItem('user', user)
      dispatch('setUser', user)
    } catch (errors) {
      onErrors([errors])
    }
  }, [email, password, onErrors, dispatch])

  return handleLogin
}

export const useRegister = (
  { email, password, confirmPassword },
  onErrors = () => {}
) => {
  const { dispatch } = useStore()
  const { mutate } = useSWRConfig()

  const handleRegister = useCallback(async () => {
    try {
      await checkForCredentials(
        { email, password, confirmPassword },
        { checkComfirmPassword: true }
      )

      const { user: hasUser } =
        (await ApiClient.getUser(email, password)) ?? EMPTY_OBJECT
      if (!isEmpty(hasUser)) return onErrors(['User Already exists'])

      // Create the new user
      const { user } =
        (await ApiClient.registerUser(email, password)) ?? EMPTY_OBJECT

      const newExercices = map(BASE_EXERCICES, exercice => ({
        userId: get(user, 'id'),
        categoryId: get(exercice, 'categoryId'),
        name: get(exercice, 'name'),
        description: get(exercice, 'description')
      }))

      // Initialize base exercices for the new user
      await ApiClient.createExercices(newExercices)
      mutate(apiUris.exercicesByCategory())

      // Dispatch user to global state and localPhoneStorage
      await LocalPhoneStorage.setItem('user', user)
      dispatch('setUser', user)
    } catch (errors) {
      onErrors([errors])
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
