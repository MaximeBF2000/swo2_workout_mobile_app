import { get } from 'lodash'
import { server } from '../serverInstance'

export async function _getCategories() {
  const { data } = await server.get(`/api/categories`)

  return get(data, 'categories')
}
