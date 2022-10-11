import { Storage } from 'expo-storage'

export class LocalPhoneStorage {
  static async setItem(key, value, onError = () => {}) {
    try {
      const jsonValue = JSON.stringify(value)
      await Storage.setItem({ key, value: jsonValue })
    } catch (err) {
      onError(err)
    }
  }

  static async getItem(key, onError = () => {}) {
    try {
      const jsonValue = await Storage.getItem({ key })
      return jsonValue !== null ? JSON.parse(jsonValue) : null
    } catch (err) {
      onError(err)
    }
  }

  static async removeItem(key, onError = () => {}) {
    try {
      await Storage.removeItem({ key })
    } catch (err) {
      onError(err)
    }
  }
}
