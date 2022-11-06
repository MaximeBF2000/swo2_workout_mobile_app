import { get } from 'lodash'
import { server } from '../serverInstance'

export async function _createSerie(serie) {
  return serie
}

export async function _updateSerie(serie) {
  return serie
}

export async function _removeSerie(serie) {
  return serie
}

export async function _addSerieToWorkoutAndExercice(serie) {
  console.warn({ serieBefore: serie })
  const { data } = await server.post(
    '/api/series/createForWorkoutAndExercice',
    serie
  )

  return get(data, 'serie')
}
