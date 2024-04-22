function getWasteInfo() {
    var wasteType = document.getElementById('wasteType').value;
    var resultElement = document.getElementById('result');

    switch (wasteType) {
        case 'plastic':
            resultElement.textContent = 'Plastikas turi būti dedamas į plastikos konteinerį.';
            break;
        case 'paper':
            resultElement.textContent = 'Popierius turi būti dedamas į popieriaus konteinerį.';
            break;
        case 'glass':
            resultElement.textContent = 'Stiklas turi būti dedamas į stiklo konteinerį.';
            break;
        case 'metal':
            resultElement.textContent = 'Metalas turi būti dedamas į metalo konteinerį.';
            break;
        default:
            resultElement.textContent = 'Pasirinkite atliekų rūšį.';
    }
}