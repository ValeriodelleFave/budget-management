import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NetworkManager {

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  get<T>(url: Url, options?: { [key: string]: string }) {
    return this.http.get<T>("http://localhost:3000" + url, { params: options });
  }

  post(url: Url, data: Object) {
    return this.http.post("http://localhost:3000" + url, data);
  }

}

export type Url = ""
  | "/"
  | "/connect"
  | "/disconnect"
