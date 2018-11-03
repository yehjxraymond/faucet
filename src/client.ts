import {Client} from "./utils";

const PROTO_PATH = __dirname + '/../faucet.proto';

const client = Client(PROTO_PATH, "localhost:50051");

client.Fund({ address: "user" }, (err: Error, response: any) =>{
  if(err) console.log(err);
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