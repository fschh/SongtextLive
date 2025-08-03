import { useEffect, useState } from 'react'
import './TextComponent.css';

function TextComponent() {

  const [text, setText] = useState("Hier werden Songtexte angezeigt.");

  useEffect(() => {
    // WebSocket zum Node.js Server
    //const server_ip = "192.168.178.50";
    let server_ip = import.meta.env.VITE_NODE_SERVER_IP;
    if (!server_ip) {
      server_ip = "localhost";
    }
    const ws = new WebSocket("ws://" + server_ip + ":3001");

    ws.onclose = (event) => {
      console.log("WebSocket closed: ", event.reason);
    }

    ws.onmessage = (event) => {
      console.log("Received data: ", event.data)
      setText(event.data);
    };

    ws.onerror = (err) => {
      console.log("WebSocket Error: ", err);
    };

    return () => {
      ws.close();
    };

  }, []);

  return (
    <div className='top-text' style={{ whiteSpace: 'pre-line' }}>
      {text}
      </div>
  )
}

export default TextComponent