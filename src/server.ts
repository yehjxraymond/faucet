import {Server} from "./utils";

const PROTO_PATH = __dirname + '/../faucet.proto';

const Fund = (call: any, callback: any) => {
  console.log("Here", call);
  callback(null, { success: true });
}

function main() {
  const server = Server({
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