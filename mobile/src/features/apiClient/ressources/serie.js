import { get } from 'lodash'
import { server } from '../serverInstance'

export async function _createSerie(serie) {
  return serie
}

export async function _updateSerie(serieId, serie) {
  const { data } = await server.put(
    '/api/series',
    JSON.stringify({ ...serie, id: serieId })
  )

  return get(data, 'serie')
}

export async function _removeSerie(serieId) {
  const data = await server.delete(`/api/series?serieId=${serieId}`)

  return get(data, 'serie')
}

export async function _addSerieToWorkoutAndExercice(serie) {
  const { data } = await server.post(
    '/api/series/createForWorkoutAndExercice',
    serie
  )

  return get(data, 'serie')
}
