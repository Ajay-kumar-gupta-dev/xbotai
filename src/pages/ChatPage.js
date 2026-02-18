import { useState } from "react";
import { sampleData } from "../data";
import Sidebar from "../components/Sidebar";
import Message from "../components/Message";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { sender: "user", text: input };

    const botReply = sampleData[input]
      ? sampleData[input]
      : "Sorry, Did not understand your query!";

    const bot = { sender: "bot", text: botReply };

    setMessages([...messages, user, bot]);
    setInput("");
  };

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main">
        <h1 className="title">Bot AI</h1>

        {messages.length === 0 && (
          <div className="hero">
            <h2>How Can I Help You Today?</h2>
            <div className="hero-circle"></div>

            <div className="cards">
              {Object.keys(sampleData).map((q, i) => (
                <div
                  key={i}
                  className="card"
                  onClick={() => setInput(q)}
                >
                  <h3>{q}</h3>
                  <p>Get immediate AI generated response</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="chat-area">
          {messages.map((m, i) => (
            <Message key={i} msg={m} />
          ))}
        </div>

        <form className="input-row" onSubmit={handleSubmit}>
          <input
            placeholder="Message Bot AI…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Ask</button>
          <button type="button">Save</button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;
