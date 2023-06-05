import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  Methods,
  RequestParams,
} from './interfaces';

/**
 * Wrapper around the request library that allows making requests and repeating them in case
 * they fail.
 * Will automatically json parse the response if the request wasn't json-encoded.
 * @param method HTTP method
 * @param baseUrl the base url - usually determined by the target environment.
 * @param endpoint the endpoint target to hit.
 * @param requestParams paramter bag for the actual request and for the request lib
 */
export async function makeRequest(
  method: Methods,
  endpoint: string,
  requestParams?: RequestParams
): Promise<AxiosResponse>  {
  const payload: AxiosRequestConfig = {
    ...requestParams,
    method,
  };

  let response;

  const baseUrl = process.env.BASE_URL;

  // Set an identifiable user agent for tracing requests from these tests.
  if (payload.headers === undefined) {
    payload.headers = {};
  }

  // Construct url from the domain and endpoint.
  const url = new URL(`${baseUrl}/${endpoint}`);
  try {
    response = await axios(url.toString(), payload);
  } catch (error: any) {
    console.log('Bad Requests!')
    throw error;
  }

  return response;
}
