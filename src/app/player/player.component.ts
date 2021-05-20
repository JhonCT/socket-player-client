import { AfterContentInit, Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  balance = 0;

  constructor(private socket: SocketService) {

  }

  ngOnInit(): void {
    this.socket.io.on('room', (data: any) => {
      console.log(data);
    });
    this.socket.io.on('changeBalance', (data: any) => {
      console.log(data);
    });
  }


  onSubmit(): void {

  }

}
