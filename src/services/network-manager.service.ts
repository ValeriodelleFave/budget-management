import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NetworkManager {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  url = {
    prod: "https://my-endpoints.herokuapp.com",
    dev: "http://localhost:3000"
  }

  constructor(private http: HttpClient) { }

  get<T>(url: Url, options?: { [key: string]: string }) {
    return this.http.get<T>(this.url.prod + url, { params: options });
  }

  post(url: Url, data: Object) {
    return this.http.post(this.url.prod + url, data);
  }

}

export type Url = ""
  | "/"
  | "/connect"
  | "/disconnect"
