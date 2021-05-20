import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  io = io("http://localhost:55555", {
    autoConnect: true
  })

  constructor(
    private http: HttpClient,
  ) { }

  login({ body }): any {
    return this.http.post(`/v1/socket/login`, body);
  }
}
