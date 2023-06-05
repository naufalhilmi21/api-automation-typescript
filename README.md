# Typescript Jest API Automation Test

## Prequisites

- NodeJS

## Installation

1. Install Dependencies
```
yarn install
```

2. Set environment variables
```
cp .env.sample .env
```

## Run Test

Run All Test

```
yarn test
```

Run Specific Test

```
yarn test getUsers
```

## Using Docker

1. Build your docker image

```
docker build -t typescript-api-automation .
```

2. Run your test in docker

```
# Run All Tests

docker run typescript-api-automation

# Run Specific Test


docker run typescript-api-automation yarn test getUsers
```



## Contribute Guideline

1. Define the endpoints you want to test in `src/endpoints`

```
# Example Users endpoints

export async function getUsers( params?: UrlParams ) {
  return await makeRequest('GET', 'api/users', { params });
}

export async function createUsers( payload?: object ) {
  return await makeRequest('POST', 'api/users', { data: payload });
}
```

2. Create your tests in `src/__tests__`

```

describe('Create Users', () => { # describe your tests
  let response: any;

  test('get user page 1', async () => {
    # body data payload
    const data = {
      name: 'morpheus',
      job: 'leader'
    }

    # call your endpoint
    response = await createUsers(data);
    
    # assertion
    expect(response.status).toBe(201)
    expect(response.data).toEqual({
      name: 'morpheus',
      job: 'leader',
      id: expect.any(String),
      createdAt: expect.any(String)
    })
  });
});

```
