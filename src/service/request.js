import axios from "axios";

const request = axios.create();

request.interceptors.request = (config) => {
  return config;
};

request.interceptors.response = (response) => {
  return response;
};
