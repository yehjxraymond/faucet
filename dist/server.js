"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const PROTO_PATH = __dirname + '/../faucet.proto';
const Fund = (call, callback) => {
    console.log("Here", call);
    callback(null, { success: true });
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