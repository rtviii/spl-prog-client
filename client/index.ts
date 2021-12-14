import web3 =require("@solana/web3.js");


// new web3.Transaction().


//pubkey 2dtzDeVBptfPKD7EAGEfR5fBS4B291T6K1D3rP1miU5s

// D9tfSVaphC1UfutN7ANuA1qiKa6BcSAcEs3nrcqa1b7s
// [189,232,65,169,184,189,15,50,106,151,78,61,145,250,206,46,255,194,58,42,228,252,214,123,121,152,214,178,41,26,46,29,191,207,44,8,104,29,51,107,237,184,118,3,49,227,222,10,188,18,180,64,196,220,241,163,125,235,107,30,74,9,164,225]
const con                  = new web3.Connection(web3.clusterApiUrl('devnet'));


( async function main (){
// FhNxpGghxtSB5G32F7XJHLHfFUxxYtbXqMDM7TWk6R3x
// const programId = new web3.PublicKey("FhNxpGghxtSB5G32F7XJHLHfFUxxYtbXqMDM7TWk6R3x");

const programId = new web3.PublicKey("FhNxpGghxtSB5G32F7XJHLHfFUxxYtbXqMDM7TWk6R3x");
    const key                  = Uint8Array.from([74,67,27,172,253,123,108,149,143,154,55,171,6,153,206,221,72,105,208,96,235,162,12,233,232,48,86,75,120,167,35,226,24,79,96,157,10,202,131,14,164,180,2,90,4,27,35,230,96,78,103,133,228,57,91,208,164,236,139,137,126,171,121,14])
    const signer: web3.Keypair = web3.Keypair.fromSecretKey(key);
    con.getBalance(signer.publicKey).then(balance =>{
        console.log("SOL balance : ", balance/web3.LAMPORTS_PER_SOL);
    })

    console.log("pubkey" , signer.publicKey.toString());

    const data: Buffer = Buffer.from("A");

    const tx           = new web3.Transaction().add(
        new web3.TransactionInstruction({
        keys:  [],   //signers
        programId,
        data
        })
    );

    var signature = await web3.sendAndConfirmTransaction(con, tx,[signer]);
    await web3.sendAndConfirmTransaction(con, tx,[signer]).then(
        sig=>{
            console.log("confirmation sig {}", sig);
        }
    )

} )()