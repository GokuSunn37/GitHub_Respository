function zaznaczanieBrakow() {
    
    const iloscTab = document.getElementsByClassName("ilosc");

    for(let i=0; i<iloscTab.length; i++) {

        const elem = iloscTab[i];

        const ilosc = elem.innerText

        let bgcolor = "Honeydew";

        if(ilosc == 0) {
            bgcolor = "red";
        } else if(ilosc < 6) {
            bgcolor = "yellow";
        }

        elem.style.backgroundColor = bgcolor;

    }    
}

function aktualizacja(id) {

    const nowaIlosc = +prompt("Podaj nową ilość: ");

    document.getElementById(id).innerText = nowaIlosc;

    zaznaczanieBrakow();

}

let zamowienieId = 1;

function zamowienie(produktId) {

    const produkt = document.getElementById(produktId).innerText;

    alert(`Zamówienie nr: ${zamowienieId} Produkt: ${produkt}`)

    zamowienieId++;

}