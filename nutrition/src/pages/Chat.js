import React, { useState } from 'react';
import Nav from '../components/Nav'; // Ensure this path is correct for your Nav component

const Chat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      body: JSON.stringify({ message: userInput }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { user: userInput, bot: data.response },
        ]);
        setUserInput('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="html">
      <Nav />
      <div className="main-content">
        <div className='chat-container'>
          <div className="chat-history">
            {chatHistory.map((message, index) => (
              <div key={index} className={index % 2 === 0 ? 'user-message' : 'bot-message'}>
                <div className="message-content">{message.user || message.bot}</div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="chat-form">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type your message here..."
              className="chat-input"
            />
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
