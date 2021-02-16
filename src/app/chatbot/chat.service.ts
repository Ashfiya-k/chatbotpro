import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  constructor() { }

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
         ques:"Whats there in Indian category",
         ans:"We have  1)Veg-Thali 2)Idli Sambhar 3)Masala Dosa 4)PavBhaji 5)CholeKulcha  6)Mutton Biryani"
       },
       {
         ques:undefined,
         ans:'Sorry,I did not Understand.'

       }
     ];

     getReply(ques:string)
     {
       const converse=this.conversation.find((s)=> {return s.ques === ques});
       return converse;

     }

}