let searchQuery = ""; // Houdt de huidige zoekopdracht bij

function toggleKeyboard() {
    const keyboard = document.getElementById('keyboard');
    keyboard.style.display = keyboard.style.display === 'flex' ? 'none' : 'flex';
}

function typeKey(key) {
    searchQuery += key; // Voeg de getypte letter toe aan de zoektekst
    document.getElementById('search-display').innerText = `Zoeken: ${searchQuery}`;
    filterBooks(); // Update de boekfilter
}

function deleteKey() {
    // Verwijder de laatste letter uit de zoektekst
    searchQuery = searchQuery.slice(0, -1);
    document.getElementById('search-display').innerText = searchQuery.length > 0 
        ? `Zoeken: ${searchQuery}` 
        : "Zoek een boek...";
    filterBooks(); // Update de boekfilter
}

function clearSearch() {
    // Leeg de zoektekst
    searchQuery = "";
    document.getElementById('search-display').innerText = "Zoek een boek...";
    filterBooks(); // Reset de boekfilter
}

function filterBooks() {
    // Zoek naar boeken die overeenkomen met de zoekopdracht
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        const title = book.querySelector('img').alt.toLowerCase();
        book.style.display = title.includes(searchQuery.toLowerCase()) ? 'block' : 'none';
    });
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
    window.document.location.href = '/' + page + '.html';
}
// Object waarin de inhoud van de boeken wordt opgeslagen
const bookContents = {
    "Harry Potter en de Steen der Wijzen": "Harry Potter ontdekt dat hij een tovenaar is en gaat naar Zweinstein.",
    "It Ends With Us": "Een krachtig verhaal over liefde en doorzettingsvermogen.",
    "It Starts With Us": "Het vervolg op 'It Ends With Us', waarin het verhaal van Lily verder gaat.",
    "Meneer Blobvis zoekt een Liefje": "Een grappig kinderboek over Meneer Blobvis en zijn avonturen in de oceaan.",
    "Dizary Het Levende Systeem": "Een episch fantasyverhaal in een magische wereld vol mysteries.",
};

// Functie om een boek te openen en de inhoud te tonen
function openBook(bookName) {
    const bookReader = document.getElementById('book-reader');
    const bookContent = document.getElementById('book-content');

    // Controleer of het boek inhoud heeft in het object
    if (bookContents[bookName]) {
        bookContent.innerText = bookContents[bookName];
    } else {
        bookContent.innerText = "Sorry, er is geen inhoud beschikbaar voor dit boek.";
    }

    bookReader.style.display = 'flex';
}

// Functie om de boeklezer te sluiten
function closeBook() {
    const bookReader = document.getElementById('book-reader');
    bookReader.style.display = 'none';
}
