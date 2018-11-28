import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msgList: Array<any> = new Array();
  msgObservable: Subscription;

  constructor(private msgService: MessageService) { }

  ngOnInit() {
    this.msgObservable = this.msgService.getSubjectMsg().subscribe(msg => {
      this.msgList.push(msg.msg);
    });
  }

  stopMsg() {
    this.msgObservable.unsubscribe();
  }

}
