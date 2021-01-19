import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  contacteIncarcate = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form);
  }

  onCreateContact(postData: {
    nume: string;
    prenume: string;
    tel: number;
    adresa: string;
  }) {
    this.http
      .post(
        'https://agenda-2b43f-default-rtdb.europe-west1.firebasedatabase.app/contacte.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
    alert('Contact adaugat!');
  }
}
