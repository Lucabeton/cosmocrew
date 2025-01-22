let searchQuery = ""; 

function toggleKeyboard() {
    const keyboard = document.getElementById('keyboard');
    keyboard.style.display = keyboard.style.display === 'flex' ? 'none' : 'flex';
}

function typeKey(key) {
    searchQuery += key
    document.getElementById('search-display').innerText = `Zoeken: ${searchQuery}`;
    filterBooks(); 
}

function deleteKey() {
    
    searchQuery = searchQuery.slice(0, -1);
    document.getElementById('search-display').innerText = searchQuery.length > 0 
        ? `Zoeken: ${searchQuery}` 
        : "Zoek een boek...";
    filterBooks(); 
}

function clearSearch() {
 
    searchQuery = "";
    document.getElementById('search-display').innerText = "Zoek een boek...";
    filterBooks(); 
}

function filterBooks() {
   
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

const bookContents = {
    "Harry Potter en de Steen der Wijzen": "Harry Potter ontdekt dat hij een tovenaar is en gaat naar Zweinstein.",


    "It Ends With Us": "Een krachtig verhaal over liefde en doorzettingsvermogen.",


    "It Starts With Us": "Het vervolg op 'It Ends With Us', waarin het verhaal van Lily verder gaat.",


    "Meneer Blobvis zoekt een Liefje": "Een grappig kinderboek over Meneer Blobvis en zijn avonturen in de oceaan.",

    
    "Dizary Het Levende Systeem": "Een episch fantasyverhaal in een magische wereld vol mysteries.",
};


function openBook(bookName) {
    const bookReader = document.getElementById('book-reader');
    const bookContent = document.getElementById('book-content');

    if (bookContents[bookName]) {
        bookContent.innerText = bookContents[bookName];
    } else {
        bookContent.innerText = "Sorry, er is geen inhoud beschikbaar voor dit boek.";
    }

    bookReader.style.display = 'flex';
}


function closeBook() {
    const bookReader = document.getElementById('book-reader');
    bookReader.style.display = 'none';
}

const bookTexts = {
    "Harry Potter en de Steen der Wijzen": `
        Harry Potter is een weesjongen die opgroeit bij zijn nare oom, tante en neef.
        Op zijn elfde verjaardag ontdekt hij dat hij een tovenaar is en wordt hij uitgenodigd
        om naar de toverschool Zweinstein te gaan. Daar ontdekt hij zijn ware lot:
        de strijd tegen de duistere tovenaar Voldemort.
    `,
    "It Ends With Us": `
        Dit boek vertelt het verhaal van Lily, die een gecompliceerde en intense liefdesrelatie heeft.
        Ze worstelt met het verleden, haar ambities en moeilijke keuzes die haar leven veranderen.
    `,
    "It Starts With Us": `
        Het vervolg op 'It Ends With Us', waarin Lily probeert een nieuw hoofdstuk in haar leven te beginnen
        terwijl ze haar verleden onder ogen ziet en nieuwe kansen ontdekt.
    `,
    "Meneer Blobvis zoekt een Liefje": `
        Meneer Blobvis is een vis met een groot hart, maar hij voelt zich eenzaam. In dit hartverwarmende
        verhaal gaat hij op zoek naar liefde en ontdekt hij dat ware liefde dichterbij is dan hij dacht.
    `,
    "Dizary Het Levende Systeem": `
        Een spannend fantasy-avontuur waarin de wereld van Dizary tot leven komt. De helden in dit verhaal
        ontdekken geheimen, trotseren gevaren en proberen het voortbestaan van hun wereld te redden.
    `
};

function openBook(bookName) {
    const bookContent = document.getElementById('book-content');
    bookContent.innerText = bookTexts[bookName] || "Het boek is niet beschikbaar.";
    const bookReader = document.getElementById('book-reader');
    bookReader.style.display = 'flex';
}

function closeBook() {
    const bookReader = document.getElementById('book-reader');
    bookReader.style.display = 'none';
}

function navigate(page) {
    window.location.href = `/${page}.html`;
}

