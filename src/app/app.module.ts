import { NgModule } from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { ChatbotComponent } from "./chatbot/chatbot.component";
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MenuComponent } from './menu/menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChatService } from './chatbot/chat.service';
import { EditChatComponent } from './edit-chat/edit-chat.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule,IvyCarouselModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    HomeComponent,
    ChatbotComponent,
    MenuComponent,
    ContactsComponent,
    AboutusComponent,
    EditChatComponent,
    
  ],
  bootstrap: [AppComponent],
  providers: [ChatService]
})
export class AppModule {}
