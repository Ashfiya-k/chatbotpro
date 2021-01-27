import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
   txt='';
   sendText='';
   status=false;
  constructor() { }

  ngOnInit() {
  }
  onSend(){
    this.sendText=this.txt;
    this.txt='';
    this.status=true;
    this.sendText;

  }

}