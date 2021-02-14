import { Component, OnInit } from '@angular/core';

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
     conversation=[
       {
         ques:"Hi",
         ans:"Hello there! How can I help you?"
       },
          {
         ques:"What is in the menu",
         ans:"We have 1)Italian  2)Chinese  3)Indian "
       },

          {
         ques:"What you have in Indian category",
         ans:"We have  1)Veg-Thali 2)Idli Sambhar 3)Masala Dosa 4)PavBhaji 5)CholeKulcha  6)Mutton Biryani"
       }
     ];

  constructor() { }

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
    txt.value='';
 this.onReply(txt.value);
     }

    // this.onReply(txt.value);
  }

  onReply(text){
     for( var i=0;i<this.conversation.length;i+1)
     {
      if(text === this.conversation[i].ques)
   {
     console.log("in reply method" );
     this.sendText.push(this.conversation[i].ans);
     this.sendText;
    
    
   }
   break;
     }
     }

}