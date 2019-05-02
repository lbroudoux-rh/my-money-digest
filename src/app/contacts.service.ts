import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private rootUrl = 'http://microcks.apps.144.76.24.92.nip.io/dynarest/Contacts+API/0.1/contact';

  constructor(private http: HttpClient) { }

  public getContacts(): Observable<any> {
    return this.http.get<any>(this.rootUrl);
  }
  public addContact(contact: any): Observable<any> {
    return this.http.post<any>(this.rootUrl, contact);
  }

  public removeContact(id: string): Observable<void> {
    return this.http.delete<void>(this.rootUrl + '/' + id);
  }
}
