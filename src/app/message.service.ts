import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  subject = new Subject<any>();

  sendMsg(text: string) {
    this.subject.next({ msg: text });
  }

  getSubjectMsg() {
    return this.subject.asObservable();
  }
}
