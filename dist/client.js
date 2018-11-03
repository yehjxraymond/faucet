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
/*
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/faucet.proto';

const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
const faucetProto = grpc.loadPackageDefinition(packageDefinition);

function main() {
  const client = new faucetProto.Faucet('localhost:50051', grpc.credentials.createInsecure());

  client.Fund({ address: "user" }, function (err, response) {
    console.log('Success:', response.success);
  });
}

main();
*/ 
//# sourceMappingURL=client.js.map