import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { environment } from '../../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  messagingFirebase: firebase.messaging.Messaging;

  constructor(

  ) {
    firebase.initializeApp(environment.firebase);
    this.messagingFirebase = firebase.messaging();
  }

  // tslint:disable-next-line: member-ordering
  private messaging$ = new Observable(observe => {
    this.messagingFirebase.onMessage(payload => {
      observe.next(payload);
    });
  });

  requestPermission(): any {
    return new Promise(async (resolve, reject) => {
      const permissions = await Notification.requestPermission();

      if (permissions === 'granted') {
        const tokenFirebase = await this.messagingFirebase.getToken();
        resolve(tokenFirebase);
      } else {
        reject(new Error('No se otorgaron los permisos'));
      }
    });
  }

  receiveMessage(): any {
    return this.messaging$;
  }

}
