# CLI-Chat-APP

- this application is built with nodejs specifically with the `net` module in nodejs that details with the lowest level that nodejs can reach
- the application is `cmd` when you create a server(`server.js`) and connect as many clients (`client.js`) as you want.
- The application is made with just built-in modules without any third-party lib

## How to install it

As I said the application isn't using any third-party library so the installation is straightforward process

```sh
    # Just clone the repo
    git clone https://github.com/AhmedElGarhy1/chatapp-nodejs-net-cmd.git

    # Go to the directory
    cd chatapp-nodejs-net-cmd
```

## How to start and use

- to start the application you will need at least `two` terminals

1. Open the first terminal and run

```sh
    # It listen by default on port 8000
    node server.js
```

2. next open another terminal to make a client

```sh
    # It connects by default on port 8000
    node client.js
```

Now you have one client connected to the chat app **_The Server is here to be centralized between the clients and make them exchange messages_**

3. repeat the second step and make clients as many as you want and make them chat with each other
