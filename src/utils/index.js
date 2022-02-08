export const instance = axios.create({
    baseURL: 'https://dev-api-gateway-bh7oe6z6.uc.gateway.dev',
    timeout: 1000,
    //headers: {'X-Custom-Header': 'foobar'}
  });