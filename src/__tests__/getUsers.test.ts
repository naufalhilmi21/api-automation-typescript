import { getUsers, createUsers } from '../endpoints';

describe('Get Users', () => {
  let response: any;
  test('get user page 1', async () => {
    response = await getUsers();
    expect(response.status).toBe(200)
    expect(response.data.page).toBe(1)
  });


  test('get user page 1', async () => {
    response = await getUsers({ page: 2});
    expect(response.status).toBe(200)
    expect(response.data.page).toBe(2)
  });
});


describe('Create Users', () => {
  let response: any;
  test('create a user', async () => {
    const data = {
      name: 'morpheus',
      job: 'leader'
    }
    response = await createUsers(data);
    expect(response.status).toBe(201)
    expect(response.data).toEqual({
      name: 'morpheus',
      job: 'leader',
      id: expect.any(String),
      createdAt: expect.any(String)
    })
  });
});

