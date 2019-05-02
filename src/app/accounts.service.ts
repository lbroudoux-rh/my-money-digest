import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private rootUrl = 'http://microcks.apps.144.76.24.92.nip.io/rest/Openbanking.co.uk+Account+and+Transaction+API+v3.1.0/3.1.0/open-banking/v3.1/aisp';

  constructor(private http: HttpClient) { }

  public getAccounts(): Observable<any> {
    return this.http.get<any>(this.rootUrl + "/accounts");
  }

  public getAccountBalance(): Observable<any> {
    return this.http.get<any>(this.rootUrl + "/balances");
  }

  public getAccountDetails(accountId: string): Observable<any> {
    return this.http.get<any>(this.rootUrl + "/accounts/" + accountId + "/product");
  }
}
