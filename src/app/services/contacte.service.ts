import { Contact } from './../contact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl =
  'https://agenda-2b43f-default-rtdb.europe-west1.firebasedatabase.app';

@Injectable()
export class ContacteService {
  constructor(private http: HttpClient) {}

  getContacte() {
    return this.http.get(`${apiUrl}/contacte.json`);
  }

  onCreateContacte(postData: Contact) {
    this.http
      .post(`${apiUrl}/contacte.json`, postData)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  public updateContact(postData: object) {
    this.http.put(`${apiUrl}/contacte.json`, postData).subscribe((data) => {
      console.log(data);
    });
  }
}
