import { TransactionList } from '../atm/atm.model';

export interface AtmInterface {

    account : string,
    balance : number,
    name : string,
    lastTransactions : TransactionList,

}