import {Client} from "./utils";

const PROTO_PATH = __dirname + '/../faucet.proto';

const client = Client(PROTO_PATH, "localhost:50051");

client.Fund({ address: "user" }, (err: Error, response: any) =>{
  if(err) console.log(err);
  console.log('Success:', response.success);
});
