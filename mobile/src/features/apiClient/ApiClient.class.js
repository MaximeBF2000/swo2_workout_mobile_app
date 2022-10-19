import { _getUser, _registerUser } from './ressources/user'
import {
  _createTraining,
  _updateTraining,
  _removeTraining,
  _getTrainings
} from './ressources/training'
import {
  _createSession,
  _updateSession,
  _removeSession,
  _getSessions
} from './ressources/session'
import {
  _createExercice,
  _updateExercice,
  _removeExercice
} from './ressources/exercice'
import { _createSerie, _updateSerie, _removeSerie } from './ressources/serie'

export class ApiClient {
  // User
  static async getUser(...args) {
    return _getUser(...args)
  }

  static async registerUser(...args) {
    return _registerUser(...args)
  }

  // Training
  static async createTraining(...args) {
    return _createTraining(...args)
  }

  static async updateTraining(...args) {
    return _updateTraining(...args)
  }

  static async removeTraining(...args) {
    return _removeTraining(...args)
  }

  static async getTrainings(...args) {
    return _getTrainings(...args)
  }

  // Session
  static async createSession(...args) {
    return _createSession(...args)
  }

  static async updateSession(...args) {
    return _updateSession(...args)
  }

  static async removeSession(...args) {
    return _removeSession(...args)
  }

  static async getSessions(...args) {
    return _getSessions(...args)
  }

  // Serie
  static async createExercice(...args) {
    return _createTraining(...args)
  }

  static async updateExercice(...args) {
    return _updateTraining(...args)
  }

  static async removeExercice(...args) {
    return _removeTraining(...args)
  }

  // Exercice
  static async createExercice(...args) {
    return _createTraining(...args)
  }

  static async updateExercice(...args) {
    return _updateTraining(...args)
  }

  static async removeExercice(...args) {
    return _removeTraining(...args)
  }
}