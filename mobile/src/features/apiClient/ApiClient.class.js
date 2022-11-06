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
  _createWorkout,
  _updateWorkout,
  _removeWorkout,
  _getWorkouts,
  _addExerciceToWorkout
} from './ressources/workout'
import {
  _createExercices,
  _updateExercice,
  _removeExercice,
  _getExercice,
  _getExerciceByWorkout
} from './ressources/exercice'
import {
  _createSerie,
  _updateSerie,
  _removeSerie,
  _addSerieToWorkoutAndExercice
} from './ressources/serie'
import { _getCategories } from './ressources/categories'

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

  // Workout
  static async createWorkout(...args) {
    return _createWorkout(...args)
  }

  static async updateWorkout(...args) {
    return _updateWorkout(...args)
  }

  static async removeWorkout(...args) {
    return _removeWorkout(...args)
  }

  static async getWorkouts(...args) {
    return _getWorkouts(...args)
  }

  static async addExerciceToWorkout(...args) {
    return _addExerciceToWorkout(...args)
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
  static async createSerie(...args) {
    return _createSerie(...args)
  }

  static async updateSerie(...args) {
    return _updateSerie(...args)
  }

  static async removeSerie(...args) {
    return _removeSerie(...args)
  }

  static async addSerieToWorkoutAndExercice(...args) {
    return _addSerieToWorkoutAndExercice(...args)
  }

  // Exercice
  static async createExercices(...args) {
    return _createExercices(...args)
  }

  static async updateExercice(...args) {
    return _updateExercice(...args)
  }

  static async removeExercice(...args) {
    return _removeExercice(...args)
  }

  static async getExercice(...args) {
    return _getExercice(...args)
  }

  static async getExerciceByWorkout(...args) {
    return _getExerciceByWorkout(...args)
  }

  // Exercice Category
  static async getCategories(...args) {
    return _getCategories(...args)
  }
}
