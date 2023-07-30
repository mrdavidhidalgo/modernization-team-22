import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactUploaded,ContactUploadedPost } from './contact_uploaded';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private backUrl: string = "https://eoiu32ok1um6tzl.m.pipedream.net"

  constructor(private http: HttpClient) { }


  createContacts(contacts: Array<ContactUploaded>) {
    const headers = new HttpHeaders({
      'Content-Type': `application/json`
    })
    this.http.post(`${this.backUrl}/test`, new ContactUploadedPost(contacts),{ headers: headers }).subscribe(x=> console.log(x))

  }

}


