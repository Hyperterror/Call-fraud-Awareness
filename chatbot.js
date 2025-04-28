async function askCallGuardBot(message) {
  const response = await fetch('https://call-fraud-awareness.onrender.com', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: message })
  });

  const data = await response.json();
  return data.reply;
}

document.addEventListener('DOMContentLoaded', function() {
  // Create Chatbot Button
  const chatButton = document.createElement('div');
  chatButton.id = 'chatbot-button';
  chatButton.innerHTML = '💬';
  document.body.appendChild(chatButton);

  // Create Chatbot Window
  const chatWindow = document.createElement('div');
  chatWindow.id = 'chatbot-window';
  chatWindow.innerHTML = `
      <div id="chatbot-header">
          CallGuard Chatbot
          <span id="chatbot-close">✖️</span>
      </div>
      <div id="chatbot-messages"></div>
      <form id="chatbot-form">
          <input type="text" id="chatbot-input" placeholder="Ask about cyber crime..." required />
          <button type="submit">➤</button>
      </form>
  `;
  document.body.appendChild(chatWindow);

  // Toggle Chatbot Window
  chatButton.addEventListener('click', () => {
      chatWindow.style.display = 'flex';
      chatButton.style.display = 'none';
  });

  document.getElementById('chatbot-close').addEventListener('click', () => {
      chatWindow.style.display = 'none';
      chatButton.style.display = 'block';
  });

  // Send and Receive Messages
  document.getElementById('chatbot-form').addEventListener('submit', async function(event) {
      event.preventDefault();
      const inputField = document.getElementById('chatbot-input');
      const userMessage = inputField.value.trim();
      if (!userMessage) return;

      appendMessage('You', userMessage);
      inputField.value = '';

      appendTyping();

      try {
          const botReply = await askCallGuardBot(userMessage);
          removeTyping();
          appendMessage('CallGuard', botReply);
      } catch (error) {
          removeTyping();
          appendMessage('CallGuard', '❌ Sorry, something went wrong.');
          console.error('Error:', error);
      }
  });

  function appendMessage(sender, text) {
      const messagesDiv = document.getElementById('chatbot-messages');
      const messageElement = document.createElement('div');
      messageElement.className = sender === 'You' ? 'user-message' : 'bot-message';
      messageElement.innerText = text;
      messagesDiv.appendChild(messageElement);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  function appendTyping() {
      const messagesDiv = document.getElementById('chatbot-messages');
      const typingIndicator = document.createElement('div');
      typingIndicator.id = 'typing-indicator';
      typingIndicator.className = 'bot-message';
      typingIndicator.innerText = 'Typing...';
      messagesDiv.appendChild(typingIndicator);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  function removeTyping() {
      const typingIndicator = document.getElementById('typing-indicator');
      if (typingIndicator) {
          typingIndicator.remove();
      }
  }
});
