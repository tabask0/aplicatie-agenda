import { ContacteService } from './services/contacte.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContacteComponent } from './contacte/contacte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetaliiContacteComponent } from './detalii-contacte/detalii-contacte.component';
import { AddContactComponent } from './add-contact/add-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContacteComponent,
    DetaliiContacteComponent,
    AddContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ContacteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
