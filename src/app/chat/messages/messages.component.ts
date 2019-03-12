import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from '../shared/chat.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  @Input()
  chatMessages: ChatMessage[];

  constructor() { }

  ngOnInit() {
  }

}
