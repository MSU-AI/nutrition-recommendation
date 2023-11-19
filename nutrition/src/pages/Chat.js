import React, { useState } from 'react';
import Nav from '../components/Nav';

const Chat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make an API call to your custom API to get the response from the chat bot
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your custom API
    fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      body: JSON.stringify({ message: userInput }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the chat history with the user's message and the response from the chat bot
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { user: userInput, bot: data.response },
        ]);
        // Clear the user's input
        setUserInput('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='Chat'>
        <Nav />
    <div className="chat-container">
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div key={index}>
            <div>{message.user}</div>
            <div>{message.bot}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
    </div>
  );
};

export default Chat;
