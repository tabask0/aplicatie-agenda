import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContacteService } from '../services/contacte.service';

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css'],
})
export class ContacteComponent implements OnInit {
  contacte: Contact[] = [];
  selectedContact: Contact | undefined;
  constructor(private contacteService: ContacteService) {}

  ngOnInit(): void {
    this.getContacte();
  }

  getContacte() {
    this.contacteService.getContacte().subscribe((response: any) => {
      const contactIds = Object.keys(response);
      contactIds.forEach((c) => {
        this.contacte.push(response[c]);
      });
    });
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
}
