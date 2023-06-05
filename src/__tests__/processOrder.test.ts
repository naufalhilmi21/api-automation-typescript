import { ProcessOrders } from 'endpoints/orders';
import { processOrder } from '../endpoints'

describe('Process orders', () => {
  let response: any;
  test('Process orders should succeed', async () => {
    const data: ProcessOrders = {
      order_id: 123,
      order_description: "sample description",
      order_status: "New",
      last_updated_timestamp: "1642321210439",
      special_order: false
    }

    response = await processOrder(data);
    expect(response.status).toBe(201)
    expect(response.data).toEqual(data)
  });
});
