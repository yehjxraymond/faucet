import Web3 from "web3";

export class Funder {
  web3: Web3;
  rpc: string;
  account: any;
  nonce: number;

  constructor({rpc, fundingAccount}: {rpc: string, fundingAccount: string}) {
    this.rpc = rpc;
    this.web3 = new Web3(rpc);
    this.account = this.web3.eth.accounts.privateKeyToAccount(fundingAccount);
  }

  async _initNonce() {
    if(this.nonce) return this.nonce;
    this.nonce = await this.web3.eth.getTransactionCount(this.account.address , "pending");
    return this.nonce;
  }

  async fund(account: string, amount: string|number) {
    await this._initNonce();
    const nonceToUse = this.nonce;
    this.nonce += 1;

    const tx = {
      gas: 21000,
      to: account,
      from: this.account.address,
      value: amount,
      nonce: nonceToUse,
    }

    const signedTx = await this.account.signTransaction(tx);
    const txReceipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    return txReceipt;
  }
}