import { makeRequest } from '../@core'

export type ProcessOrders = {
  order_id: number,
  order_description: string,
  order_status: string,
  last_updated_timestamp: string
  special_order: boolean
}

export async function processOrder( payload?: ProcessOrders ) {
  return await makeRequest('POST', 'processOrder', { data: payload });
}
