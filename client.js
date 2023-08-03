const net = require("net");
const readLine = require("readline/promises");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let id = 0;

const client = net.createConnection(
  {
    port: 8000,
    host: "localhost",
  },
  async () => {
    client.write(" ");
  }
);

const askQuestion = async (id) => {
  const msg = await rl.question(`User ${id}------>`);
  if (!msg) {
    clearLine();
    await askQuestion(id);
    return;
  }
  await moveCursor();
  await clearLine();
  client.write(msg);
};

client.on("data", async (chunck) => {
  console.log();
  const data = chunck.toString();
  const split = data.split("-");
  id = split[1];
  const msg = split[3];
  await moveCursor();
  await clearLine();
  if (id && msg) {
    console.log(msg);
  } else {
    console.log(data);
  }
  await askQuestion(id);
});

client.on("end", () => {
  console.log("Endded");
});

// utils
async function clearLine() {
  return new Promise((r) => {
    process.stdout.clearLine(0, () => r());
  });
}

async function moveCursor(dir = -1) {
  return new Promise((r) => {
    process.stdout.moveCursor(-1, dir, () => r());
  });
}
