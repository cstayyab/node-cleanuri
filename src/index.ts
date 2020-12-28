import fetch, { Response } from 'node-fetch';

interface ResponseCleanURI {
  result_url?: string;
  error?: string;
}

const API_BASE = 'https://cleanuri.com/api/';
const API_VER = 'v1';
const SHORTEN_ROUTE = 'shorten';
export const shorten = async (longURL: URL): Promise<URL> => {
  const COMPLETE_ROUTE = `${API_BASE}${API_VER}/${SHORTEN_ROUTE}`;
  const httpResponse: Response = await fetch(COMPLETE_ROUTE, {
    method: 'POST',
    body: `url=${encodeURI(longURL.toString())}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  let apiResponse: ResponseCleanURI;
  try {
    apiResponse = (await httpResponse.json()) as ResponseCleanURI;
  } catch (ex) {
    throw ex;
  }

  if (apiResponse.result_url !== undefined) {
    return new URL(apiResponse.result_url);
  } else if (apiResponse.error !== undefined) {
    throw new Error(apiResponse.error + ` url=${encodeURIComponent(longURL.toString())}`);
  } else {
    throw new Error(`Invalid Response Received!! (Response: ${JSON.stringify(apiResponse)})`);
  }
};
