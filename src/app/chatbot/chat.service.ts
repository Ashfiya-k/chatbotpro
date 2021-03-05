import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  constructor() { }

   conversation=[
    
            {
              category:"Greeting",
    ques:["Hi","Hello","Good Morning","Good Afternoon","Good Evening"],
    ans:"Hello Friend! How may I assist you?"
},
     
{
   category:"Menu",
    ques:["Please show the menu?","Which cuisines do you serve?","Where is the menu? ","Kindly display the menu?","Where is this restaurant's menu? ","I need the menu?","I'm hungry! I want a menu.","Menu Please","Menu?","What is in the menu","Menu"],
    ans:"Sure! Here is our menu. We serve 1.) Indian 2.) Chinese 3.) Italian 4.)Desert"
},

       {
          category:"Indian",
    ques:["Show me the Indian cuisine you have?","What would you be serving in the Indian cuisine? ","Please elaborate the Indian menu?","What is there in the Indian menu? "],
    ans:"Sure! Here is the list of Indian Cuisines we have - 1.) Mutton Biryani 2.) Veg Thali 3.) Idli Sambhar 4.) Paav Bhaaji 5.) Chole Kulchee 6.) Butter Dosa 7.)Pulka 8.)Upma 9.)Masala Dosa 10.)Veg Bityani 11.)Mushroom Biryani 12.) Egg Biryani 13.) Chicken Biryani "
},
  

{
   category:"Chinese",
    ques:["Sure! Here is the list of Chinese Cuisines we have","Show me the Chinese cuisine you have?","What would you be serving in the Chinese cuisine?","Please elaborate the Chinese menu? ","What is there in the Chinese menu? "],
    ans:"1.) Manchurian 2.) Hakka Noodles3.) Dumplings  4.) Paneer Chilli 5.) Chicken Chilly Rolls 6.) Manchow Soup 7.)Veg Noodles 8.) Egg Noodles 9.) Gobi Noodles 10.)Veg Manchurian 11.)Gobi Manchurian 12.)Chicken Manchurian"
},


{
   category:"Italian",
    ques:["Show me the Italian cuisine you have?","What would you be serving in the Italian cuisine?","Please elaborate the Italian menu?","What is there in the Italian menu?"],
    ans:"Sure! Here is the list of Italian Cuisines we have - 1.) Margarita Pizza 2.) Veg Pasta 3.) Pink Pasta 4.) Burritos 5.) Garlic Bread 6.) Cheese Balls 7.)Cheese Pizza 8.)Chicken Pizza 9.)Pepperoni Pizza 10.)Hot Garlic Cheese Pasta"
},
{
   category:"Dessert",
  ques:["Show me Dessert menu you have?","What would you be serving in Desert?","Please elaborate the Dessertmenu?","What is there in the Dessert menu?"],
  ans:"We have Vanilla ice cream,Strawberry ice cream,Butterscotch ice cream,Chocolate Brownie"
},
{
   category:"GoodBye",
    ques:["Done"],
    ans:"Thankyou for the orders. Kindly allow us a maximum time of 30 minutes to serve you in the best possible manner"
},

{
     category:"PriceMuttonBiryani",
    ques:["What is the price of Mutton Biryani","How much is for the Mutton Biryani","Mutton Biryani price","Price of Mutton Biryani"],
    ans:"The Mutton Biryani will cost you Rs.120 per plate"
},

{
   category:"PriceVegThali",
    ques:["What is the price of Veg Thali","How much is for the Veg Thali","Veg Thali Price"],
    ans:"The Veg Thali will cost you Rs.150 per plate"
},

{   category:"PriceIdliSambhar",
    ques:["What is the price of Idli Sambhar","How much is for the Idli Sambhar"],
    ans:"The Idli Sambhar will cost you Rs.100 per plate"
},

{
     category:"PricePaavBhaji",
    ques:["What is the price of Paav Bhaaji","How much is for the Paav Bhaaji"],
    ans:"The Paav Bhaaji will cost you Rs.150 per plate"
},


{

     category:"PriceCholeKulchhe",
    ques:["What is the price of Chole Kulchhe","How much is for the Chole Kulchhe"],
    ans:"The Chole Kulchhe will cost you Rs.110 per plate"
},

{
     category:"PriceButterDosa",
    ques:["What is the price of Butter Dosa","How much is for the Butter Dosa"],
    ans:"The Butter Dosa will cost you Rs.100 per plate"
},

{
   category:"PriceManchurian",
    ques:["What is the price of Manchurian","How much is for the Manchurian"],
    ans:"The Manchurian will cost you Rs.140 per plate"
},

{
   category:"PriceHakkaNoodles",
    ques:["What is the price of Hakka Noodles","How much is for the Hakka Noodles"],
    ans:"The Hakka Noodles will cost you Rs.130 per plate"
},


{
   category:"PriceDumplings",
    ques:["What is the price of Dumplings","How much is for the Dumplings"],
    ans:"The Dumplings will cost you Rs.120 per plate"
},

{
  category:"PricePaneerChilli",
    ques:["What is the price of Paneer Chilli","How much is for the Paneer Chilli"],
    ans:"The Paneer Chilli will cost you Rs.140 per plate"
},

{
  category:"PriceChickenChillyRolls",
    ques:["What is the price of Chicken Chilly Rolls","How much is for the Chicken Chilly Rolls"],
    ans:"The Chicken Chilly Rolls will cost you Rs.160 per plate"
},

{
    category:"PriceManchowSoup",
    ques:["What is the price of Manchow Soup","How much is for the Manchow Soup"],
    ans:"The Manchow Soup will cost you Rs.100 per plate"
},


{
    category:"PriceMargaritaPizza",
    ques:["What is the price of Margarita Pizza","How much is for the Margarita Pizza"],
    ans:"The Margarita Pizza will cost you Rs.120 per plate"
},

{
    category:"PriceVegPasta",
    ques:["What is the price of Veg Pasta","How much is for the Veg Pasta"],
    ans:"The Veg Pasta will cost you Rs.160 per plate"
},

{
    category:"PricePinkPasta",
    ques:["What is the price of Pink Pasta","How much is for the Pink Pasta"],
    ans:"The Pink Pasta will cost you Rs.150 per plate"
},

{
  category:"PriceBurritos",
    ques:["What is the price of Burritos","How much is for the Burritos"],
    ans:"The Burritos will cost you Rs.130 per plate"
},

{
  category:"PriceGarlicBread",
    ques:["What is the price of Garlic Bread","How much is for the Garlic Bread"],
    ans:"The Garlic Bread will cost you Rs.100 per plate"
},

{
  category:"PriceCheeseBalls",
    ques:["What is the price of Cheese Balls","How much is for the Cheese Balls"],
    ans:"The Cheese Balls will cost you Rs.120 per plate"
},

    {
      category:"ValidateIdliSambar",
         ques:["Do you have idli sambar"],
         ans:"yes, we have idli sambar"
       },
       {
          category:"ValidateMasalaDosa",
         ques:["Do you have masala dosa"],
         ans:"yes, we have masala dosa"
       },
       {
          category:"ValidatePulka",
         ques:["Do you have pulka"],
         ans:"yes, we have pulka"
       },
       {
          category:"ValidateUpma",
         ques:["Do you have upma"],
         ans:"yes, we have upma"
       },
       {
          category:"ValidateVegBiryani",
         ques:["Do you have veg biryani"],
         ans:"yes, we have veg biryani"
       },
       {
          category:"ValidateMushroomBiryani",
         ques:["Do you have mushroom biryani"],
         ans:"yes, we have mushroom Biryani"
       },
       {
          category:"ValidateChickenBiryani",
         ques:["Do you have chicken biryani"],
         ans:"yes, we have chicken Biryani"
       },
       {
          category:"ValidateEggBiryani",
         ques:["Do you have egg biryani"],
         ans:"yes, we have egg Biryani"
       },
       {
         category:"ValidateMuttonBiryani",
         ques:["Do you have mutton biryani"],
         ans:"yes, we have Mutton Biryani"
       },
       {
          category:"ValidateEggNoodles",
         ques:["Do you have egg noodles"],
         ans:"yes, we have egg noodles"
       },
       {
          category:"ValidateVegNoodles",
         ques:["Do you have veg noodles"],
         ans:"yes, we have veg noodles"
       },
       {
          category:"ValidateGobiNoodles",
         ques:["Do you have gobi noodles"],
         ans:"yes, we have gobi noodles"
       },
       {
          category:"ValidateVegManchurian",
         ques:["Do you have veg manchurian"],
         ans:"yes, we have veg manchurian"
       },
       {
          category:"ValidateGobiMAnchurian",
         ques:["Do you have gobi manchurian"],
         ans:"yes, we have gobi manchurian"
       },
       {
          category:"ValidateChickenManchurian",
         ques:["Do you have chicken manchurian"],
         ans:"yes, we have chicken manchurian"
       },
       {
          category:"ValidateCheesePizza",
         ques:["Do you have cheese pizza"],
         ans:"yes, we have cheese pizza"
       },
       {
          category:"ValidateChickenPizza",
         ques:["Do you have chicken pizza"],
         ans:"yes, we have chicken pizza"
       },
       {
          category:"ValidatePepperoniPizza",
         ques:["Do you have pepperoni pizza"],
         ans:"yes, we have pepperoini pizza"
       },
       {
          category:"ValidateVanilaIceCream",
         ques:["Do you have vannila ice cream"],
         ans:"yes, we have ice cream"
       },
       {
          category:"ValidateStrawberryIceCream",
         ques:["Do you have strawberry ice cream"],
         ans:"yes, we have strawberry ice cream"
       },
       {
          category:"ValidateButterScotch",
         ques:["Do you have butterscotch ice cream"],
         ans:"yes, we have butterscotch ice cream"
       },
       {
          category:"ValidateChocolateBrownie",
         ques:["Do you have chocolate brownie"],
         ans:"yes, we have chocolate brownie"
       },
           {
              category:"PriceUpma",
         ques:["What's the cost of upma"],
         ans:"It's just RS.50/- only"
       },
       {
          category:"PriceMasalaDosa",
         ques:["What's the cost of masala dosa"],
         ans:"It's just RS.30/- only"
       },
       {
          category:"PricePulka",
         ques:["What's the cost of pulka"],
         ans:"It's just RS.30/- only"
       },
     
       {
          category:"PriceVegBiryani",
         ques:["What's the cost of veg biryani"],
         ans:"It's just RS.100/- only"
       },
       {
          category:"PriceMushroomBiryani",
         ques:["What's the cost of mushroom biryani"],
         ans:"It's just RS.120/- only"
       },
       {
          category:"PriceEggBiryani",
         ques:["What's the cost of egg biryani"],
         ans:"It's just RS.130/- only"
       },
       {
          category:"PriceChickenBiryani",
         ques:["What's the cost of chicken biryani"],
         ans:"It's just RS.140/- only"
       },
       {
          category:"PriceMuttonBiryani",
         ques:["What's the cost of mutton biryani"],
         ans:"It's just RS.150/- only"
       },
       {
          category:"PriceVegNoodles",
         ques:["What's the cost of veg noodles"],
         ans:"It's just RS.60/- only"
       },
       {
          category:"PriceEggNoodles",
         ques:["What's the cost of egg noodles"],
         ans:"It's just RS.80/- only"
       },
       {
          category:"PriceGobiNoodles",
         ques:["What's the cost of gobi noodles"],
         ans:"It's just RS.100/- only"
       },
     
  
       {
          category:"PriceChickenManchurian",
         ques:["What's the cost of chicken manchurian"],
         ans:"It's just RS.120/- only"
       },
       {
          category:"PriceCheesePizza",
         ques:["What's the cost of cheese pizza"],
         ans:"It's just RS.100/- only"
       },
       {
          category:"PriceChickenPizza",
         ques:["What is the cost of chicken pizza"],
         ans:"It's just RS.150/- only"
       },
       {
          category:"PricePepperoniPizza",
         ques:["What's the cost of pepperoni pizza"],
         ans:"It's just RS.120/- only"
       },
       {
          category:"PriceVanillaIceCream",
         ques:["What's the cost of vannila ice cream"],
         ans:"It's just RS.60/- only"
       },
       {
          category:"PriceStrawberryIceCream",
         ques:["What's the cost of strawberry ice cream"],
         ans:"It's just RS.80/- only"
       },
       {
          category:"PriceButterscotchIceCream",
         ques:["What's the cost of butterscotch ice cream"],
         ans:"It's just RS.80/- only"
       },
       {
          category:"PriceChocolateBrownie",
         ques:["What's the cost of chocolate brownie"],
         ans:"It's just RS.80/- only"
       },
     
      {
         category:"OpeningHour",
         ques:["What are your opening hours"],
         ans:"We will be available from 9 AM to 10:30 PM"
       },
       {
          category:"TakeOrder",
         ques:["Can you place an order for me"],
         ans:"Sorry, I am here to give some basic information about our menu. For orders please call us at 9325670832 and for any  query call us at 1872-1002-76"
       }
     

     ];

     getReply(ques:string)
     {
       const converse=this.conversation.find((s)=> {
         return s.ques.find((k)=>{
         return k === ques;});
         });
       return converse;

     }

     getCategory(){
       const cats:string[]=[];
  
     this.conversation.forEach((s)=>{
      
       cats.push(s.category);
  
     });
      return cats;  
    
     }
     updateChat(c:string){
        const converse=this.conversation.find((s)=> {
         return s.category === c;
        });
        console.log(converse);
       return converse;

     }

}