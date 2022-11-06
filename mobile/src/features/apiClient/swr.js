import useSWR from 'swr'
import { axiosGetFetcher } from './serverInstance'

export const useAxiosSWR = uri => useSWR(uri, axiosGetFetcher)
