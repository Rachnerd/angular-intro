import { Component, OnInit } from '@angular/core';
import { ChatMessage } from './shared/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chatMessages: ChatMessage[] = [
    {
      content: 'Welcome to the chat!',
      username: 'Bot',
      userId: '0',
      isUser: true
    },
    {
      content: 'John has joined the chat',
      username: 'System',
      userId: '-1',
      isUser: false
    },
    {
      content: 'Hi John!',
      username: 'Bot',
      userId: '0',
      isUser: true
    },
    {
      content: 'Hi',
      username: 'John',
      userId: '322',
      isUser: true
    },
    {
      content: `How's your day?`,
      username: 'Bot',
      userId: '0',
      isUser: true
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  sendMessage(content: string) {
    console.log(content);
  }
}
