"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
class Funder {
    constructor({ rpc, fundingAccount }) {
        this.rpc = rpc;
        this.web3 = new web3_1.default(rpc);
        this.fundingAccountPrivate = fundingAccount;
        this.fundingAccount = this.web3.eth.accounts.privateKeyToAccount(fundingAccount).address;
    }
    fund(account, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(account, amount);
            return this.web3.eth.sendTransaction({
                from: this.fundingAccount,
                to: account,
                value: amount
            });
        });
    }
}
exports.Funder = Funder;
//# sourceMappingURL=funder.js.map