import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PushNotificationService } from '../service/service/push-notification.service';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  registrationToken: string;

  constructor(
    private socketService: SocketService,
    private router: Router,
    private notification: PushNotificationService
  ) {
    notification.requestPermission().then(token => {
      this.registrationToken = token;
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    const body = {
      username: this.username,
      password: this.password,
      registrationToken: this.registrationToken
    };

    this.socketService.login({ body }).subscribe({
      next: (response: any) => {
        this.router.navigate(['/home'], { queryParams: response.data.item });
      },
      error: (err: any) => {
        console.log(err);
      }
    });

    // this.socketService.io.emit('join-room', this.username);


  }
}
