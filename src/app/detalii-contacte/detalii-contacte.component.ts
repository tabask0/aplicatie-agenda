import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';

const apiUrl =
  'https://agenda-2b43f-default-rtdb.europe-west1.firebasedatabase.app';
@Component({
  selector: 'app-detalii-contacte',
  templateUrl: './detalii-contacte.component.html',
  styleUrls: ['./detalii-contacte.component.css'],
})
export class DetaliiContacteComponent implements OnInit {
  @Input() contact: Contact | undefined;
  status: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  deleteContact() {
    this.http
      .delete(`${apiUrl}/contacte.json`)
      .subscribe(() => (this.status = 'Contact sters!'));
  }
}
