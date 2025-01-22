let searchQuery = "";

function toggleKeyboard() {
    const keyboard = document.getElementById('keyboard');
    keyboard.style.display = keyboard.style.display === 'flex' ? 'none' : 'flex';
}

function typeKey(key) {
    searchQuery += key;
    document.getElementById('search-display').innerText = `Zoeken: ${searchQuery}`;
    filterFilms();
}

function deleteKey() {
    searchQuery = searchQuery.slice(0, -1);
    document.getElementById('search-display').innerText = searchQuery.length > 0 
        ? `Zoeken: ${searchQuery}` 
        : "Zoek een film...";
    filterFilms();
}

function clearSearch() {
    searchQuery = "";
    document.getElementById('search-display').innerText = "Zoek een film...";
    filterFilms();
}

function filterFilms() {
    const films = document.querySelectorAll('.film');
    films.forEach(film => {
        const title = film.querySelector('img').alt.toLowerCase();
        film.style.display = title.includes(searchQuery.toLowerCase()) ? 'block' : 'none';
    });
}

function closeKeyboard() {
    document.getElementById('keyboard').style.display = 'none';
}

const filmContents = {
    "Inception": "Een meesterwerk van Christopher Nolan waarin dromen en realiteit vervagen.",
    "Interstellar": "Een episch ruimte-avontuur over liefde, wetenschap en overleving.",
    "The Dark Knight": "Het iconische Batman-verhaal met Heath Ledger als de Joker.",
    "Avatar": "Een visueel verbluffende film over een buitenaardse wereld.",
    "The Matrix": "Een baanbrekende sciencefictionfilm over realiteit en kunstmatige intelligentie."
};

function openFilm(filmName) {
    const filmViewer = document.getElementById('film-viewer');
    const filmContent = document.getElementById('film-content');
    filmContent.innerText = filmContents[filmName] || "Informatie over deze film is niet beschikbaar.";
    filmViewer.style.display = 'flex';
}

function closeFilm() {
    document.getElementById('film-viewer').style.display = 'none';
}
