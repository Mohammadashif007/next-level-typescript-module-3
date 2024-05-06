{ //! access modifiers


    class BankAccount {
        public readonly id: number;
        public name:string;
        protected _balance: number;
        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number){
            this._balance  = this._balance + amount;
        }

        getBalance(){
            return this._balance;
        }
    }

    class Student extends BankAccount {
        test(){
            this.
        }
    }

    const user1 = new BankAccount(1, "User", 200);
    user1.addDeposit(200);
    const balance = user1.getBalance();
    console.log(balance);






















}