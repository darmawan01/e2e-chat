class Chat {
  wsUri = "ws://localhost:9090";
  socket = null;


  init() {
    this.socket = new WebSocket(this.wsUri);
    this.socket.onopen = (evt) => {
      this.onOpen(evt)
    };
    this.socket.onclose = (evt) => {
      this.onClose(evt)
    };
    this.socket.onmessage = (evt) => {
      this.onMessage(evt)
    };
    this.socket.onerror = (evt) => {
      this.onError(evt)
    };
  }

  sendMsg(message) {
    const date = new Date(Date.now());
    const addPad = (arg) => arg.toString().padStart(2, '0');
    const year = date.getFullYear(),
      month = addPad((date.getMonth() + 1)),
      day = addPad(date.getDate()),
      hrs = addPad(date.getHours()),
      mnt = addPad(date.getMinutes());

    const dateStr = `${year}-${month}-${day} ${hrs}:${mnt}`;
    this.socket.send(JSON.stringify({
      message,
      date: dateStr
    }));

    document
      .getElementById('main-body')
      .innerHTML += `
    <div class="container darker">
      <img src="./img/avatar.png" alt="Avatar" class="right" style="width:100%;">
      <div class="right-msg">
        <p>${message}</p>
        <span>${dateStr}</span>
      </div>
    </div>
    `;
    document.getElementById("inputmsg").value = "";
  }

  onOpen(evt) {
    console.log("Connected to the server...");
  }

  onClose(evt) {
    console.log("Server connection is closed...");
  }

  onMessage(evt) {
    const {
      message,
      date
    } = JSON.parse(evt.data);


    document
      .getElementById('main-body')
      .innerHTML += `
      <div class="container">
        <img src="./img/avatar.png" alt="Avatar" style="width:100%;">
        <div class="left-msg">
          <p>${message}</p>
          <span>${date || "-"}</span>
        </div>
      </div>
    `;
  }

  onError(evt) {
    console.log("Failed connect to server...");
  }
}

const chat = new Chat();
chat.init();


const inputMsg = document.getElementById("inputmsg");
inputMsg.addEventListener('keyup', (e) => {

  if (e.code === "Enter") {
    e.preventDefault();

    chat.sendMsg(inputMsg.value);
  }
});