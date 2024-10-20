import React from "react";
import "./ChatbotHelp.css";

const ChatbotHelp = () => {
  return (
    <div className="chatbotHelpContainer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="auto"
        viewBox="0 -960 960 960"
        width="32px"
        fill="white"
      >
        <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
      </svg>
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="26" fill="rgb(253, 134, 75)" />
      </svg>
    </div>
  );
};

export default ChatbotHelp;
