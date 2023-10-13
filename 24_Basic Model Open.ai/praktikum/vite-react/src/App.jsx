import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import { openai } from "./configs/openai";
import icon from "./assets/avatar.jpeg";

//configure AI role and content
const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Brody! Ask me anything!",
      sentTime: "just now",
      sender: "Brody",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  //function for handle send button
  const handleSend = async (message) => {
    //add a newMessage from user
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    //call a function for process message to chatgpt
    await processMessageToChatGPT(newMessages);
  };

  //async function for process message to chatgpt
  async function processMessageToChatGPT(chatMessages) {
    //format messages for OpenAI API
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "Brody") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    //call openai API with try & catch
    try {
      //create chat completions with model gpt-3.5-turbo
      const response = await openai.chat.completions
        .create({
          model: "gpt-3.5-turbo",
          messages: [systemMessage, ...apiMessages],
          max_tokens: 50,
        })
        .then((data) => {
          setMessages([
            ...chatMessages,
            {
              message: data.choices[0].message.content,
              sender: "user",
            },
          ]);
          setIsTyping(false);
        });

      //catch error case
    } catch (error) {
      console.error(error);
      setMessages([
        ...chatMessages,
        {
          message: error,
          sender: "Brody",
        },
      ]);
    }
  }

  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}>Chat with Brody</h1>
      <div
        style={{
          position: "relative",
          height: "500px",
          width: "1260px",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      >
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? <TypingIndicator content="Brody is typing" /> : null
              }
            >
              {messages.map((message, i) => {
                return (
                  <Message key={i} model={message}>
                    <Avatar src={icon} />
                  </Message>
                );
              })}
            </MessageList>
            <MessageInput
              attachButton={false}
              placeholder="Type message here"
              onSend={handleSend}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
