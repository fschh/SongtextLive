const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const clients = new Set();

let curr_text = "Aktueller Text";

wss.on('connection', (ws) => {
  console.log("Neuer Client verbunden");
  clients.add(ws);

  send_text(ws, curr_text);
  
  ws.onclose = (event) => { 
    clients.delete(ws);
    console.log("Verbindung zu Client geschlossen");
  }
});

app.post('/notify', (req, res) => {
  const json_data = req.body;
  console.log("Received JSON: ", json_data);
  const text = json_data.text;
  curr_text = text;

  for (const client of clients) {
    send_text(client, text)
  }

  res.sendStatus(200);
});

const send_text = (client, text) => {
  if (client.readyState === WebSocket.OPEN) {
      client.send(text);
    }
}

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
