import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-detalii-contacte',
  templateUrl: './detalii-contacte.component.html',
  styleUrls: ['./detalii-contacte.component.css'],
})
export class DetaliiContacteComponent implements OnInit {
  @Input() contact: Contact | undefined;
  constructor() {}

  ngOnInit(): void {}
}
