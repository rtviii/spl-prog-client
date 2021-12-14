import web3 = require("@solana/web3.js");
import WebSocket from 'ws'



const ws = new WebSocket("ws://api.devnet.solana.com");
// const ws = new WebSocket("ws://127.0.0.1:8900");
ws.OPEN


ws.on('open', () => {

    console.log("opened connection");

    ws.send(Buffer.from(
        JSON.stringify(
            {
                "jsonrpc": "2.0",
                "id": 1,
                "method": "logsSubscribe",
                "params": [
                    {
                        "mentions": ["FhNxpGghxtSB5G32F7XJHLHfFUxxYtbXqMDM7TWk6R3x"]
                    },
                    {
                        "commitment": "finalized"
                    }
                ]
            }

        )
    ))
})

interface __LogsSubscribeResultMessage {
    jsonrpc: string
    method? : string
    params?: {
        result: {
            context: {
                slot: number
            },
            value: {
                signature: string,
                err?     : string,
                logs     : string[]
            }
        },
        subscription: number
    }



}

ws.on('message', (m: any) => {
    var msg: __LogsSubscribeResultMessage = JSON.parse(m)


    console.log(msg);
    if (msg.params) {
        console.log(msg.params.result.value); // <------ 
        console.log(msg.params.result.context); // <--- Slot

    }


    // console.log("context", msg.params.result.context);
    // console.log("value", msg.params.result.value);
});