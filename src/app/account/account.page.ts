import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { AccountsService } from '../accounts.service';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  accountId: string;
  account: any;
  details: any[];

  constructor(private accountsService: AccountsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.account = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.accountsService.getAccountDetails(params.get('accountId')))
    );
    this.account.subscribe(res => {
      this.details = res.Data.Product
      this.accountId = res.Data.Product[0].AccountId;
    });
  }

  getDescription(product: any): string {
    return JSON.stringify(product, null, 2);
  }
}
