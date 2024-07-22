export const nodeDialogue = {
    "mac": [
        { text: `What OS do you use?`, code: `` },

        {
            text: `You need to run below to install some binaries:`,
            code: `
        wget https://theta-downloader.s3.amazonaws.com/ethrpc/theta_local_privatenet_macos.tar.gz
        tar -xvzf theta_local_privatenet_macos.tar.gz
        cd theta_local_privatenet_macos/bin`
        },

        {
            text: `Now add the binaries to allowed applications:`,
            code: `
        sudo spctl --add ./theta
        sudo spctl --add ./thetacli
        sudo spctl --add ./theta-eth-rpc-adaptor`
        },

        {
            text: `Now use this to start your Theta local privatnet!`,
            code: `./theta start --config=../privatenet/validator --password=qwertyuiop`
        },

        {
            text: `Open a new terminal, run this for an ETH RPC adaptor:`,
            code: `./theta-eth-rpc-adaptor start --config=../privatenet/eth_rpc_adaptor`
        },

        {
            text: `In another terminal, run this to verify the setup:`,
            code: `curl -X POST -H 'Content-Type: application/json' --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":67}' http://127.0.0.1:18888/rpc`
        },

        {
            text: `If you get this then you've successfully set up a local private Theta node on your Mac!`,
            code: `{"jsonrpc":"2.0","id":67,"result":"0x16e"}`
        }
    ]
    ,
    "linux": [
        {
            text: `What OS do you use?`,
            code: ``
        },

        {
            text: `You need to run below to install some binaries:`,
            code: `
        wget https://theta-downloader.s3.amazonaws.com/ethrpc/theta_local_privatenet_linux.tar.gz
        tar -xvzf theta_local_privatenet_linux.tar.gz
        cd theta_local_privatenet_linux/bin`
        },

        {
            text: `Now use this to start your Theta local privatnet!`,
            code: `./theta start --config=../privatenet/validator --password=qwertyuiop`
        },

        {
            text: `Open a new terminal, run this for an ETH RPC adaptor:`,
            code: `./theta-eth-rpc-adaptor start --config=../privatenet/eth_rpc_adaptor`
        },

        {
            text: `In another terminal, run this to verify the setup:`,
            code: `curl -X POST -H 'Content-Type: application/json' --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":67}' http://127.0.0.1:18888/rpc`

        },

        {
            text: `If you get this then you've successfully set up a local private Theta node on your Linux!`,
            code: `{"jsonrpc":"2.0","id":67,"result":"0x16e"}`
        }
    ]
};