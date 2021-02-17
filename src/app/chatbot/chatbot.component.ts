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
  colorStatus:boolean;


  onSend(txt){
     if(txt.value === "")
     {
       this.status=true;
     }
     else{
       this.colorStatus=true;
    this.sendText.push(txt.value);
         this.colorStatus=false;
     this.reply=this.chatService.getReply(txt.value);

      if(this.reply !== undefined)
      {
          this.sendText.push(this.reply.ans);
      }   
      else{
   
      this.sendText.push("Sorry i did not Understand.");
      console.log("in reply method" );
      }
    txt.value='';

     }
  }
      getColor(){
       return this.colorStatus === true ?'aqua':'yellowgreen';
     }


 
        
    
    
    
   
     
     }
