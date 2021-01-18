import { AppComponent } from './app.component';
import { ContacteComponent } from './contacte/contacte.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'edit', component: AddContactComponent },
  { path: 'contacte', component: ContacteComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
