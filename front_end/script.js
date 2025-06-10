document.addEventListener('DOMContentLoaded', () => {
const chatContainer = document.getElementById('chat-container');
const openChatButton = document.getElementById('ai-button');
const closeChatButton = document.getElementById('back-button');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messageArea = document.getElementById('chat-input-area');
const chatMessages = document.getElementById('chat-messages');
const ShowClassesButton = document.getElementById('show-classes');

function openChat() {
    chatContainer.style.display = 'flex';
    openChatButton.style.display = 'none';
    messageInput.focus();
}

function closeChat() {
    chatContainer.style.display = 'none';
    openChatButton.style.display = 'flex';
}

openChatButton.addEventListener('click', openChat);
closeChatButton.addEventListener('click', closeChat);

function addMessage(messageText, sender) {
    
    const newMessage = document.createElement('div')
    newMessage.classList.add('chat-message')
    
    if (sender === 'user') {
        newMessage.classList.add('user-message');
    }

    else {
        newMessage.classList.add('ai-message')
    }

    newMessage.textContent = messageText;

    chatMessages.appendChild(newMessage);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function fetchData() {
    addMessage('What classes am I taking this semester', 'user');
    ShowClassesButton.style.display = 'none'

    fetch('http://127.0.0.1:5000/get_classes')
        .then(
            response => {
                return response.json()
            })
        .then(classData => {
            const formattedData = `Your classes this semester are:  ${classData.join(', ')}`
            
            addMessage(formattedData, 'bot');

        })
}

ShowClassesButton.addEventListener('click', fetchData);  
});
