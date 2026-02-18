import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="logo-row">
        <div className="logo-circle"></div>
        <span className="new-chat">New Chat</span>
      </div>

      <button
        className="past-btn"
        onClick={() => navigate("/history")}
      >
        Past Conversations
      </button>
    </div>
  );
}

export default Sidebar;
