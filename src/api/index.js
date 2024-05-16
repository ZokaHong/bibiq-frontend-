import axios from "axios";
const apiBaseUrl = "http://localhost:8009/api/v1";

export function getApi(apiName) {
  return axios.get(`${apiBaseUrl}${apiName}`);
}
export function postApi(apiName, data) {
  return axios.post(`${apiBaseUrl}${apiName}`, data);
}
