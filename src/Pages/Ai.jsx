import { useState } from "react";
import ai from "../assets/ai.png";

const Ai = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "I'm here to listen and help. Could you tell me more about how you're feeling?",
            sender: "assistant",
          },
        ]);
      }, 1000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const quickReplies = [
    "Talk About Feelings",
    "Self-Care Tips",
    "Stress Management",
    "Anxiety Help",
  ];

  const handleQuickReply = (reply) => {
    setMessages([...messages, { text: reply, sender: "user" }]);
    setTimeout(() => {
      let response;
      switch (reply) {
        case "Talk About Feelings":
          response =
            "It's good to talk about your feelings. What's been on your mind lately?";
          break;
        case "Self-Care Tips":
          response =
            "Here are some self-care ideas:\n- Take a short walk\n- Practice deep breathing\n- Drink some water\n- Listen to calming music";
          break;
        case "Stress Management":
          response =
            "Managing stress is important. Would you like to try a simple grounding exercise?";
          break;
        case "Anxiety Help":
          response =
            "Anxiety can be challenging. Remember to breathe deeply. Would you like to try a mindfulness exercise?";
          break;
        default:
          response =
            "I'm here to help. Could you tell me more about what you're experiencing?";
      }
      setMessages((prev) => [...prev, { text: response, sender: "assistant" }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-auto lg:bg-[#bcccdc] lg:p-20 ">
      <div className="flex flex-col h-screen bg-[#bcccdc] lg:bg-white ">
        {/* Header */}
        <header className=" p-4 shadow-md  lg:rounded-t-[20px] bg-white">
          <h1 className="text-2xl font-bold lg:flex lg:justify-center ">
            Mental Health Assistant
          </h1>
          <p className="text-sm text-blue-700 lg:flex lg:justify-center ">
            I'm here to provide support, listen to your concerns, and offer
            guidance on mental well-being.
          </p>
        </header>

        {/* Chat area */}
        <div className="flex-1 p-4 overflow-y-auto ">
          {/* Welcome message */}
          <div className="flex flex-row items-center mb-6 lg:flex lg:justify-start">
            <img
              src={ai}
              className="w-full max-w-[300px] h-auto rounded-[30px] border-[1px] border-black md:max-w-[400px] md:h-[370px] lg:max-w-[200px] lg:h-[170px] mb-4"
              alt="AI Assistant"
            />
            <div className="mb-6 bg-blue-100 p-4 rounded-lg lg:w-[90rem] lg:h-[10rem]">
              <h2 className="text-xl font-semibold">
                Hello! I'm your Mental Health Assistant.
              </h2>
              <p className="text-blue-700">
                You can ask me anything, and I'll do my best to help.
              </p>
            </div>
          </div>

          {/* Quick replies section */}
          <div className="mb-6 ">
            <h3 className="text-lg font-medium text-gray-700 mb-2 lg:flex lg:justify-center ">
              How Can I Help You Today?
            </h3>
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="bg-yellow-500 hover:bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-sm transition"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input area */}
        <div className="border-t border-gray-200 p-4 bg-[#bcccdc] lg:bg-white">
          <div className="flex items-center gap-5">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message here..."
              className="flex-1 border border-gray-300 rounded-[14px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-yellow-500 hover:bg-orange-300 text-white px-4 py-2 rounded-full transition"
            >
              Send
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            If you're experiencing a mental health emergency, please call 911 or
            your local emergency services immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ai;
