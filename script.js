function getProfession() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    let profession = "";

    // Қызығушылықтар мен мамандықтарды сәйкестендіру
    if (userInput.includes("музыка")) {
        profession = "Сенің арманың бойынша мамандық: Музыкант, Композитор, Әнші";
    } else if (userInput.includes("компьютер") || userInput.includes("технология")) {
        profession = "Сенің арманың бойынша мамандық: Бағдарламашы, Веб-дамыту маманы, ИТ сарапшы";
    } else if (userInput.includes("медицина")) {
        profession = "Сенің арманың бойынша мамандық: Дәрігер, Мейірбике, Хирург";
    } else if (userInput.includes("спорт")) {
        profession = "Сенің арманың бойынша мамандық: Спортшы, Фитнес жаттықтырушысы";
    } else if (userInput.includes("бизнеc")) {
        profession = "Сенің арманың бойынша мамандық: Кәсіпкер, Менеджер, Бизнеc сарапшысы";
    } else {
        profession = "Сенің қызығушылықтарыңа сәйкес мамандықты таба алмадық. Қайтадан көріп шығыңыз!";
    }

    document.getElementById("result").innerText = profession;
}