import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.component.html',
  styleUrls: ['./tchat.component.css']
})
export class TchatComponent implements OnInit {

  msg: any = {
    text: ''
  };

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  submit() {
    this.messageService.sendMsg(this.msg.text);
  }

}
