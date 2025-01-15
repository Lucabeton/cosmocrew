function toggleKeyboard() {
    const keyboard = document.getElementById('keyboard');
    keyboard.style.display = keyboard.style.display === 'flex' ? 'none' : 'flex';
}

function typeKey(key) {
    alert(`Je hebt '${key}' getypt!`);
}

function closeKeyboard() {
    document.getElementById('keyboard').style.display = 'none';
}

function openBook(bookName) {
    const bookReader = document.getElementById('book-reader');
    document.getElementById('book-content').innerText = `Je leest nu: ${bookName}`;
    bookReader.style.display = 'flex';
}

function closeBook() {
    document.getElementById('book-reader').style.display = 'none';
}

function navigate(page) {
   window.document.location.href='/' + page + '.html'
}
