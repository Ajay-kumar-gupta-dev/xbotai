import { useNavigate } from "react-router-dom";

function HistoryPage() {
  const navigate = useNavigate();
  const chats = JSON.parse(localStorage.getItem("chats")) || [];

  return (
    <div className="history-container">
      <h2>Conversation History</h2>
      <button onClick={() => navigate("/")}>New Chat</button>

      {chats.map((chat) => (
        <div key={chat.id} className="history-card">
          {chat.messages.map((msg, i) => (
            <div key={i}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default HistoryPage;
