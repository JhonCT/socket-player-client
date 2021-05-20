import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const body = {
      username: this.username,
      password: this.password,
    };



    this.socketService.io.emit('join-room', this.username);


  }
}
