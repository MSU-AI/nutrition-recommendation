import React, { useState, useEffect, useRef } from 'react';
import Nav from '../../components/Nav/Nav';
import './Chat.css'

const Chat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');
  const bottomOfChat = useRef(null); // Create a reference

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const botResponse = "Test message";

    setChatHistory(prevChatHistory => [
      ...prevChatHistory,
      { sender: 'user', content: userInput },
      { sender: 'bot', content: botResponse },
    ]);
    setUserInput('');
  };

  useEffect(() => {
    // Scroll to the bottom of the chat history whenever it updates
    bottomOfChat.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

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
            <div ref={bottomOfChat}></div> {/* Reference point for scrolling */}
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
