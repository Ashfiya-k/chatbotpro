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
   status=false;
   reply:{category:string,ques:string[],ans:string};
  colorStatus:boolean;

  constructor(private chatService:ChatService) { }

  ngOnInit() {
  }



  onSend(txt){
     if(txt.value === "")
     {
       this.status=true;
     }
     else{
  
    this.sendText.push(txt.value);
  
        
        setTimeout(()=>{
 this.reply=this.chatService.getReply(txt.value.toLowerCase());
       
      if(this.reply !== undefined)
      {
          this.sendText.push(this.reply.ans);
      }   
      else{
   
      this.sendText.push("Sorry I did not Understand.");
      console.log("in reply method" );
        
      }
    txt.value='';

     
        },2000);
    
  }
  }
   


 
        
    
    
    
   
     
     }
