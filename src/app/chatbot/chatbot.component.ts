import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  //  txt='';
  //  sendText=[];
  //  status=false;
  // constructor() { }

  // ngOnInit() {
  // }
  // onSend(txt){
  //   this.sendText.push(txt.value);
  //   this.sendText;
  //   txt.value='';

  // }

     sendText=[];
     replyText=[];
   status=false;
   reply:{ques:string,ans:string};
      

  constructor(private chatService:ChatService) { }

  ngOnInit() {
  }
  onSend(txt){
     if(txt.value=== "")
     {
       this.status=true;
     }
     else{
    this.sendText.push(txt.value);
    this.sendText;
    this.onReply(txt.value);
    txt.value='';
    
 
     }

    
  }

  onReply(text){
      this.reply=this.chatService.getReply(text);
       
     this.replyText.push(this.reply.ans);
      console.log("in reply method" );
        
    
    
    
   
     
     }

}