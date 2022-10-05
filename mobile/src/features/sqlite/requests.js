import { useState } from 'react'
export { sql } from './db'

const useQueryDatabase = (query, args = []) => {
  const [state, setState] = useState([])
  sql(query, res => setState(res), args)

  return state
}

export const useGetTrainings = () => {
  return useQueryDatabase('SELECT * FROM trainings')
}

export const useGetSessionsByTraining = trainingId => {
  return useQueryDatabase(`SELECT * FROM sessions WHERE trainingId=?`, [
    trainingId
  ])
}

export const useGetExercicesBySession = sessionId => {
  return useQueryDatabase(`SELECT * FROM EXERCICES WHERE sessionId=?`, [
    sessionId
  ])
}

export const useGetExercicesByCategories = () => {
  const exercices = useQueryDatabase(`SELECT * FROM EXERCICES`)
}

export const createTraining = (name, description) => {
  sql(`INSERT INTO trainings (name, description) VALUES ("?", "?")`, [
    name,
    description
  ])
}

export const createSession = (name, description) => {
  sql(`INSERT INTO trainings (name, description) VALUES ("?", "?")`, [
    name,
    description
  ])
}
