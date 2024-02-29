import axios from "axios";
import { HttpResponse } from "./types/global-types";

// Create an instance of axios
const httpClient = axios.create({
  baseURL: "https://pw1-test.mmic.cz",
  headers: {
    "Content-Type": "application/json",
    "token": "2f6155a7-0d78-4f23-9024-ad3e3ab8ce41",
  },
});

/**
 * HTTP GET request
 */
export const httpGet = async (url: string): Promise<HttpResponse> => {
  try {
    const response = await httpClient.get(url);
    return new Promise((resolve) => resolve({ response, error: null }));
  } catch (error) {
    console.error(error);
    return new Promise((resolve) => resolve({ response: null, error }));
  }
}

/**
 * HTTP POST request
 */
export const httpPost = async (url: string, data: any): Promise<HttpResponse> => {
  try {
    const response = await httpClient.post(url, data);
    return new Promise((resolve) => resolve({ response, error: null }));
  } catch (error) {
    console.error(error);
    return new Promise((resolve) => resolve({ response: null, error }));
  }
}

export default httpClient;