import axios from "axios";
const apiBaseUrl = "http://localhost:8009/api/v1";

export function getApi(apiName, params, headers) {
  return axios.get(`${apiBaseUrl}${apiName}`, { params, headers });
}
export function postApi(apiName, data, headers) {
  return axios.post(`${apiBaseUrl}${apiName}`, data, { headers });
}
