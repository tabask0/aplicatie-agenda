import { CONTACTS } from './../lista-contacte';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContacteService {
  private url = 'http://localhost:3000/contacte';

  constructor(private http: HttpClient) {}
}
