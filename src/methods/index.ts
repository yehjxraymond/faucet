import Web3 from "web3";

export class Funder {
  web3: Web3;
  rpc: string;
  fundingAccountPrivate: string;
  fundingAccount: string;

  constructor({rpc, fundingAccount}: {rpc: string, fundingAccount: string}) {
    this.rpc = rpc;
    this.web3 = new Web3(rpc);
    this.fundingAccountPrivate = fundingAccount;
    this.fundingAccount = this.web3.eth.accounts.privateKeyToAccount(fundingAccount).address;
  }

  async fund(account: string, amount: string|number) {
    console.log(account, amount);
    return this.web3.eth.sendTransaction({
      from: this.fundingAccount,
      to: account,
      value: amount
    });
  }
}