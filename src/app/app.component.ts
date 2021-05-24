import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from './service/service/push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'socket-player-client';

  constructor(
   
  ) {
    
  }

  ngOnInit(): void {


  }
}
