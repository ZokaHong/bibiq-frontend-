import axios from "axios";
const apiBaseUrl = "http://localhost:8009/api/v1";

export function getApi(apiName, params, headers) {
  return axios.get(`${apiBaseUrl}${apiName}`, { params, headers });
}
export function postApi(apiName, data, headers) {
  return axios.post(`${apiBaseUrl}${apiName}`, data, { headers });
}
export function putApi(apiName, data, headers){
  return axios.put(`${apiBaseUrl}${apiName}`, data, { headers });
}
export function deleteApi(apiName, data, headers){
  return axios.delete(`${apiBaseUrl}${apiName}`, { data, headers });
}