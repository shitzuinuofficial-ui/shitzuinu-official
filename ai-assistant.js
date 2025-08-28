// ai-assistant.js

document.addEventListener("DOMContentLoaded", () => {
  const aiBtn = document.getElementById("ai-btn");
  const aiChat = document.getElementById("ai-chat");
  const aiMessages = document.getElementById("ai-messages");
  const aiInput = document.getElementById("ai-input");
  const aiSend = document.getElementById("ai-send");

  // Toggle AI chat visibility
  aiBtn.addEventListener("click", () => {
    aiChat.style.display = aiChat.style.display === "block" ? "none" : "block";
  });

  // Append message to chat
  function appendMessage(sender, text) {
    const message = document.createElement("div");
    message.classList.add("ai-message", sender);
    message.textContent = text;
    aiMessages.appendChild(message);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }

  // Dummy AI response function (replace with real API if needed)
  function getAIResponse(userMessage) {
    // Example responses
    const responses = {
      hello: "Hello! How can I help you with ShitzuInu?",
      price: "Check the ticker for current crypto prices.",
      help: "You can ask me about our mini-games or token info!"
    };
    const lowerMsg = userMessage.toLowerCase();
    return responses[lowerMsg] || "I'm not sure about that. Try asking something else!";
  }

  // Send message
  function sendMessage() {
    const userText = aiInput.value.trim();
    if (!userText) return;

    appendMessage("user", userText);
    aiInput.value = "";

    // Simulate AI typing delay
    setTimeout(() => {
      const aiText = getAIResponse(userText);
      appendMessage("ai", aiText);
    }, 500);
  }

  aiSend.addEventListener("click", sendMessage);
  aiInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });
});
