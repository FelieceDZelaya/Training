export class AccountModel {
    accountNumber : string = '';
    accountBalance : number = 0;
}

export class AccountList {
    accounts : Array<AccountModel> = [];
}

export class TransactionModel {
    accountNumber : string = '';
    dateOfTransaction : Date = new Date();
    transactionType : string = '';
    amount : number = 0;
}

export class TransactionList {
    transactions : Array<TransactionModel> = [];
}