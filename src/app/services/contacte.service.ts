import { Contact } from './../contact';
import { CONTACTS } from './../lista-contacte';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContacteService {
  constructor(private http: HttpClient) {}

  onCreateContacte(postData: {
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
  }
}
