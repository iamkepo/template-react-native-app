import axios from "axios";

const baseURL = "http://192.168.31.26:3000";

export function checkversion() {
  return axios({
    method: 'get',
    url: baseURL+"/version/0.0.1",
  })
}


export function setuser(data) {
  return axios({
    method: 'post',
    url: baseURL+"/setuser",
    data: data
  })
}
