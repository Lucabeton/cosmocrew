function addMessage() {
    // Haal het bericht op uit de invoer
    const messageInput = document.getElementById('messageInput');
    const messageBox = document.getElementById('messageBox');

    if (messageInput.value.trim() !== "") {
        // Maak een nieuwe div voor het bericht
        const newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.textContent = messageInput.value;

        // Voeg het nieuwe bericht toe aan de berichtenbox
        messageBox.appendChild(newMessage);

        // Maak het invoerveld leeg
        messageInput.value = '';

        // Scroll naar beneden in de berichtenbox
        messageBox.scrollTop = messageBox.scrollHeight;
    } else {
        alert('Typ een bericht in voordat je toevoegt.');
    }
}