import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chatbot/chat.service';

@Component({
  selector: 'app-edit-chat',
  templateUrl: './edit-chat.component.html',
  styleUrls: ['./edit-chat.component.css']
})
export class EditChatComponent implements OnInit {

   categories:string[];
  addRow=false;


  constructor(private chatService:ChatService) { }
converse:{category:string,ques:string[],ans:string};

  ngOnInit() {
    
       this.categories=this.chatService.getCategory();
         console.log("Done");
         
      this.converse=this.chatService.updateChat(this.categories[0]);
      console.log(this.converse);
      
     }
     onCategorySelect(event:Event){
       
      this.converse= this.chatService.updateChat((<HTMLInputElement>event.target).value);
      console.log(this.converse);
  
    
       console.log("Done");
     }
  }
   

