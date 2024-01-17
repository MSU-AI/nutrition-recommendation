import React, { useState } from 'react';
import Nav from '../components/Nav'; // Ensure this path is correct for your Nav component
import './Chat.css'

const Chat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const openAiEndpoint = "https://api.openai.com/v1/chat/completions";
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY; // Ensure this is set in your .env file

    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userInput }],
      temperature: 0.7
    };

    try {
      const response = await fetch(openAiEndpoint, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      });

      const data = await response.json();
      const botResponse = data.choices[0].message.content.trim();

      setChatHistory(prevChatHistory => [
        ...prevChatHistory,
        { sender: 'user', content: userInput },
        { sender: 'bot', content: botResponse },
      ]);
      setUserInput('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="html">
      <Nav />
      <div className="main-content">
        <div className='chat-container'>
          <div className="chat-history">
            {chatHistory.map((message, index) => (
              <div key={index} className={message.sender === 'user' ? 'user-message' : 'bot-message'}>
                <div className="message-content">{message.content}</div>
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
