"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const PROTO_PATH = __dirname + '/../faucet.proto';
const client = utils_1.Client(PROTO_PATH, "localhost:50051");
client.Fund({ address: "user" }, (err, response) => {
    if (err)
        console.log(err);
    console.log('Success:', response.success);
});
//# sourceMappingURL=client.js.map