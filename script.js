document.getElementById('suggest-button').addEventListener('click', function() {
    const suggestions = [
        "Математика пәнінің мұғалімі",
        "Программист",
        "Дизайнер",
        "Маркетолог",
        "Журналист"
    ];
    
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    const suggestion = suggestions[randomIndex];
    
    document.getElementById('suggestions').innerText = "Ұсыныс: " + suggestion;
});
