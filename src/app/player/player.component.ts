import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PushNotificationService } from '../service/service/push-notification.service';
import { SocketService } from '../socket.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  balance = 0;
  player: any;

  constructor(
    private socket: SocketService,
    private router: ActivatedRoute,
    private notification: PushNotificationService
  ) {

  }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.player = params;
    });
    // this.socket.io.on('room', (data: any) => {
    //   console.log(data);
    // });
    // this.socket.io.on('changeBalance', (data: any) => {
    //   console.log(data);
    // });
    this.notification.receiveMessage().subscribe((payload) => {
      const player = JSON.parse(payload.notification.body);
      this.player = player;
    });
  }

  onSubmit(): void {

  }

}
