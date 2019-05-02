import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {

  accounts: any[];
  accountsBalances: any[];

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.getAccounts();
    this.getAccountsBalances();
  }

  getAccounts(): void {
    this.accountsService.getAccounts().subscribe(results => {
      this.accounts = results.Data.Account;
    });
    
  }
  getAccountsBalances(): void {
    this.accountsService.getAccountBalance().subscribe(results => {
      this.accountsBalances = results.Data.Balance;
    });
  }

  getAccountBalance(accountId: string): string {
    for (let index = 0; index < this.accountsBalances.length; index++) {
      const element = this.accountsBalances[index];
      if (element.AccountId === accountId) {
        return element.Amount.Amount;
      }
    }
    return "473.25";
  }
}
