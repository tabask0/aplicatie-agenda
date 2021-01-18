import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../lista-contacte';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css'],
})
export class ContacteComponent implements OnInit {
  contacte = CONTACTS;
  selectedContact: Contact | undefined;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getContacte() {
    this.http
      .get(
        'https://agenda-2b43f-default-rtdb.europe-west1.firebasedatabase.app/contacte.json'
      )
      .pipe(
        map((responseData) => {
          const contacteArray: Contact[] = [];
        })
      )
      .subscribe((contacte) => {
        console.log(contacte);
      });
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
}
