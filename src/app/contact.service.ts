import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get('http://localhost:4200/assets/contact.json');
  }

  fakeCreateNewContact(contact) {
    return !(contact && contact.name === 'Tiep Phan');
  }

  fakeAsyncTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(300);
      }, 500);
    });
  }
}
