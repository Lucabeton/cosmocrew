function addMessage() {

    const messageInput = document.getElementById('messageInput');
    const messageBox = document.getElementById('messageBox');

    if (messageInput.value.trim() !== "") {
    
        const newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.textContent = messageInput.value;

   
        messageBox.appendChild(newMessage);

        messageInput.value = '';

        messageBox.scrollTop = messageBox.scrollHeight;
    } else {
        alert('Typ een bericht in voordat je toevoegt.');
    }
}