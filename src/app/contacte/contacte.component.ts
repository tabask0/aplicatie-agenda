import { DetaliiContacteComponent } from './../detalii-contacte/detalii-contacte.component';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../lista-contacte';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css'],
})
export class ContacteComponent implements OnInit {
  contacte = CONTACTS;
  selectedContact: Contact | undefined;
  constructor() {}

  ngOnInit(): void {}

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
}
