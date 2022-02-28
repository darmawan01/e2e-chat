"use strict";

const WebSocket = require("ws");
const process = require("process");

const port = process.argv[2];
if (port == undefined) {
  console.log("No port provided!");
  return;
}

let socket = new WebSocket("ws://localhost:" + port);

socket.on("message", (message) => {
  console.log("Message received:", message);
});

socket.on("open", () => {
  socket.send(JSON.stringify({ message: "some message" }));
  console.log("Send message");
});
