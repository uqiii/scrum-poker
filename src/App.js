import React, { useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io.connect('http://localhost:3001');

function App() {
  const sendMessage = () => {
    socket.emit('send-message', { message: 'hello' });
  };

  useEffect(() => {
    socket.on('receive-message', (data) => {
      alert(data);
    });
  }, [socket]);

  return (
    <div className="App">
      <input placeholder="Message" />
      <button onClick={sendMessage} type="button">Send</button>
    </div>
  );
}

export default App;
