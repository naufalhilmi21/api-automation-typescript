import { UrlParams } from '@core/api/interfaces'
import { makeRequest } from '../@core'

export async function getUsers( params?: UrlParams ) {
  return await makeRequest('GET', 'api/users', { params });
}

export async function createUsers( payload?: object ) {
  return await makeRequest('POST', 'api/users', { data: payload });
}
