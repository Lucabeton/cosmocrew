// Functie om te controleren hoe gezond iemand eet
function checkHealth() {
    const form = document.getElementById('healthForm'); // Haalt het formulier op
    const vegetables = parseInt(form.elements['vegetables'].value); // Waarde van groenten
    const fastfood = parseInt(form.elements['fastfood'].value); // Waarde van fastfood
    const water = form.elements['water'].value; // Waarde van water

    let score = 0;

    // Score berekening
    if (vegetables >= 2) score += 2; // Goede score voor veel groenten
    if (fastfood <= 1) score += 2;  // Goede score voor weinig fastfood
    if (water === 'yes') score += 2; // Goede score voor voldoende water

    const resultDiv = document.getElementById('result'); // Selecteert de result-div

    // Resultaat op basis van score
    if (score >= 5) {
        resultDiv.innerHTML = "Je eet zeer gezond! Goed bezig!";
        resultDiv.style.color = "green";
    } else if (score >= 3) {
        resultDiv.innerHTML = "Je eet redelijk gezond, maar er is ruimte voor verbetering.";
        resultDiv.style.color = "orange";
    } else {
        resultDiv.innerHTML = "Je moet je eetpatroon verbeteren voor een gezondere levensstijl.";
        resultDiv.style.color = "red";
    }
}
