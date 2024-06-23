import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    axios.defaults.baseURL = 'http://localhost:5050';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  request(method: string, url: string, data: any, isAuthenticated?: boolean): Promise<any> {
    let headers: any = {
      'Content-Type': 'application/json' // Default header
    };

    if (isAuthenticated) {
      headers.Authorization = `Bearer ${window.localStorage.getItem("auth_token")}`;
    }

    return axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    });
  }
}
