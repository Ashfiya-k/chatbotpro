import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
   txt='';
   sendText=[];
   status=false;
  constructor() { }

  ngOnInit() {
  }
  onSend(txt){
    this.sendText.push(txt.value);
    this.sendText;
    txt.value='';

  }

}