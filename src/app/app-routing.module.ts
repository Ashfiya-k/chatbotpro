import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import{ ChatbotComponent} from './chatbot/chatbot.component';
import {MenuComponent} from './menu/menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
   { path:'',component:HomeComponent},
  { path: "home", component: HomeComponent },
    { path:"menu",component:MenuComponent},
    { path:"contacts",component:ContactsComponent},
     { path:"aboutus",component:AboutusComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
