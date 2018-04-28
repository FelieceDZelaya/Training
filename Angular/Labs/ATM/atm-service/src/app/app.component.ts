import { Component } from '@angular/core';
import { AtmServiceService } from './services/atm.service.service';
import { AtmInterface } from './interfaces/atm.interface';
import { ValueTransformer } from '@angular/compiler/src/util';
import { TransactionList } from './atm/atm.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ATM Project';
  businessDate = new Date();
  accountNumber : string;
  accountName : string;
  initialBalance : number;
  balanceAfterWithdrawal : number;
  balanceAfterDeposit : number;
  currentBalance : number;
  lastTransactions : TransactionList;

  constructor( public atmService : AtmServiceService ) {

    atmService.getBalanace('123456010220002')
      .subscribe(value => {
        this.accountNumber = value.account
        this.accountName = value.name
        this.initialBalance = value.balance
      });

      atmService.performWithdrawal('123456010220002',300)
      .subscribe(value => {
        this.accountNumber = value.account
        this.accountName = value.name
        this.balanceAfterWithdrawal = value.balance
      });

      atmService.performDeposit('123456010220002',4000)
      .subscribe(value => {
        this.accountNumber = value.account
        this.accountName = value.name
        this.balanceAfterDeposit = value.balance
      });

      atmService.getLastTransactions('123456010220002')
      .subscribe(value => {
        this.accountNumber = value.account
        this.lastTransactions = value.lastTransactions
      });

  }
}
