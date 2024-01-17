import React, { useState, useEffect, useRef } from 'react';
import Nav from '../../components/Nav/Nav';
import './Chat.css'
import callOpenAI from '../../useAPI/useGPT/useCall';
import { botResponse } from '../../constants/messages';
import { useOpenAPI } from '../../constants/messages';

const Chat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [typingResponse, setTypingResponse] = useState('');
  const bottomOfChat = useRef(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const simulateTyping = (response, delay = 75) => {
    let currentCharIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentCharIndex <= response.length) {
        setChatHistory(prevChatHistory => {
          const newHistory = [...prevChatHistory];
          const lastMessage = { ...newHistory[newHistory.length - 1] };
          lastMessage.content = response.slice(0, currentCharIndex);
          newHistory[newHistory.length - 1] = lastMessage;
          return newHistory;
        });
        currentCharIndex++;
      } else {
        clearInterval(typingInterval);
        setIsProcessing(false);
      }
    }, delay);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
  
    let response = useOpenAPI ? await callOpenAI(userInput) : botResponse;

    setChatHistory(prevChatHistory => [
      ...prevChatHistory,
      { sender: 'user', content: userInput },
      { sender: 'bot', content: '' },
    ]);
  
    setTimeout(() => {
      simulateTyping(response);
    }, 500);
  
    setUserInput('');
  };

  useEffect(() => {
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
                <div className="message-content">
                  {message.sender === 'bot' && message.content === '' ? (
                    <div className="typing-animation">
                      <span>{typingResponse}</span>
                    </div>
                  ) : (
                    message.content
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomOfChat}></div>
          </div>
          <form onSubmit={handleSubmit} className="chat-form">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type your message here..."
              className="chat-input"
              disabled={isProcessing}
            />
            <button type="submit" className="send-button" disabled={isProcessing}>Send</button> {/* Disable button when processing */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;