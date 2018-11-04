"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const methods_1 = require("./methods");
const PROTO_PATH = __dirname + '/../faucet.proto';
const RPC = "ws://localhost:8545";
const FUNDING_ACCOUNT_PRIVATE = "0x678ae9837e83a4b356c01b741e36a9d4ef3ac916a843e8ae7d37b9dd2045f963";
const funder = new methods_1.Funder({
    rpc: RPC,
    fundingAccount: FUNDING_ACCOUNT_PRIVATE
});
const Fund = ({ request }, cb) => {
    funder.fund(request.address, "100")
        .then(() => {
        cb(null, { success: true });
    })
        .catch(cb);
};
function main() {
    const server = utils_1.Server({
        protoPath: PROTO_PATH,
        url: "0.0.0.0:50051",
        services: [{
                name: "Faucet",
                controllers: {
                    Fund
                }
            }]
    });
    server.start();
}
main();
//# sourceMappingURL=server.js.map