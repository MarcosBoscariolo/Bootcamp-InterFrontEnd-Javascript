class bankAccount{
    constructor(agency, number, type){
        this.agency = agency;
        this.number = number;
        this.type = type;
        this.accountBalance = 0;
    }

    get balance(){
        return this.accountBalance;
    }

    set balance(value){
        this.accountBalance = value;
    }

    withdraw(value){
        if(value > this.accountBalance){
            return 'Operação negada!'
        }

        this.accountBalance = this.accountBalance - value;

        return this.accountBalance;
    }

    deposit(value){
        this.accountBalance += value;
        return this.accountBalance;
    }
}

class transactionAccount extends bankAccount{
    constructor(agency, number, creditCard){
        super(agency, number);
        this.type = "Transaction Account";
        this._creditCard = creditCard;
    }

    get creditCard(){
        return this._creditCard;
    }

    set creditCard(value){
        this._creditCard = value;
    }
}

class savingsAccount extends bankAccount{
    constructor(agency, number){
        super(agency, number);
        this.type = 'Savings Account';
    }
}

class universityAccount extends bankAccount{
    constructor(agency, number){
        super(agency, number);
        this.type = 'University Account';
    }

    withdraw(value){
        if(value > 500){
            return 'Operação negada!'
        }

        this.accountBalance = this.accountBalance - value;
    }
}