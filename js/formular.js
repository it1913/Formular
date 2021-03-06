const ctverec = '';
const kruh = 'kruh';
const trojuhelnik = 'trojuhelnik';

let tvar = {
    teleso: ctverec,
    velikost: 0,
    jednotka: "cm",

    obsah: function (teleso = this.teleso, velikost = this.velikost) {
        switch (teleso) {
            case ctverec: return (Math.pow(velikost, 2));
            case kruh: return (Math.PI * velikost * velikost).toFixed(2);
            case trojuhelnik: return (velikost * velikost * Math.sqrt(3) / 4).toFixed(2);
        }
    },
    obvod: function (teleso = this.teleso, velikost = this.velikost) {
        switch (teleso) {
            case ctverec: return (4 * velikost);
            case kruh: return (2 * Math.PI * velikost).toFixed(2);
            case trojuhelnik: return (3 * velikost);
        }
    },
    vyskaUhlopricka: function (teleso = this.teleso, velikost = this.velikost) {
        switch (teleso) {
            case ctverec: return (Math.sqrt(Math.pow(velikost, 2) * 2)).toFixed(2);
            case kruh: return;
            case trojuhelnik:
                value = (velikost / 2);
                return (Math.sqrt(Math.pow(velikost, 2) - Math.pow(value, 2))).toFixed(2);
        }
    }
}

/*function vypisVysledek() {
    tvar.velikost = document.getElementById("velikost").value;
    if (tvar.velikost != 0) {
        document.getElementById('vysledek').innerHTML = `Obsah je ${tvar.obsah()} cm². <br>`;
        document.getElementById('vysledek').innerHTML += `Obvod je ${tvar.obvod()} cm. <br>`;
        document.getElementById('vysledek').innerHTML += `Uhlopříčka je ${tvar.vyskaUhlopricka()} cm.`;
    }
}*/

function platnaHodnota(v) {
    if (v < 0) {
        v = 0;
    }
    return v;
}

function setCtverec() {
    tvar.teleso = ctverec;
    tvar.jednotka = document.getElementById("jednotka").value;
    tvar.velikost = platnaHodnota(document.getElementById("velikost").value);
    document.getElementById('label').innerHTML = `Délka strany čtverce`;
    document.getElementById('vysledek').innerHTML = `Obsah čtverce je ${tvar.obsah()} ${tvar.jednotka}². <br>`;
    document.getElementById('vysledek').innerHTML += `Obvod čtverce je ${tvar.obvod()} ${tvar.jednotka}.<br>`;
    document.getElementById('vysledek').innerHTML += `Úhlopříčka čtverce je ${tvar.vyskaUhlopricka()} ${tvar.jednotka}.`;
}

function setKruh() {
    tvar.teleso = kruh;
    tvar.jednotka = document.getElementById("jednotka").value;
    tvar.velikost = platnaHodnota(document.getElementById("velikost").value);
    document.getElementById('label').innerHTML = `Velikost poloměru kruhu`;
    document.getElementById('vysledek').innerHTML = `Obsah kruhu je ${tvar.obsah()} ${tvar.jednotka}². <br>`;
    document.getElementById('vysledek').innerHTML += `Obvod kruhu je ${tvar.obvod()} ${tvar.jednotka}.`;
}

function setTrojuhelnik() {
    tvar.teleso = trojuhelnik;
    tvar.jednotka = document.getElementById("jednotka").value;
    tvar.velikost = platnaHodnota(document.getElementById("velikost").value);
    document.getElementById('label').innerHTML = `Délka strany trojúhelníku`;
    document.getElementById('vysledek').innerHTML = `Obsah trojúhelníku je ${tvar.obsah()} ${tvar.jednotka}². <br>`;
    document.getElementById('vysledek').innerHTML += `Obvod trojúhelníku je ${tvar.obvod()} ${tvar.jednotka}.<br>`;
    document.getElementById('vysledek').innerHTML += `Délka výšky trojúhelníku je ${tvar.vyskaUhlopricka()} ${tvar.jednotka}.`;
}

let fun = function () {
    tvar.velikost = platnaHodnota(document.getElementById("velikost").value);
    document.getElementById("velikost").value = tvar.velikost;
    tvar.jednotka = document.getElementById("jednotka").value;
    switch (tvar.teleso) {
        case ctverec:
            document.getElementById('vysledek').innerHTML = `Obsah čtverce je ${tvar.obsah()} ${tvar.jednotka}². <br>`;
            document.getElementById('vysledek').innerHTML += `Obvod čtverce je ${tvar.obvod()} ${tvar.jednotka}.<br>`;
            document.getElementById('vysledek').innerHTML += `Úhlopříčka čtverce je ${tvar.vyskaUhlopricka()} ${tvar.jednotka}.`;
            break;
        case kruh:
            document.getElementById('vysledek').innerHTML = `Obsah kruhu je ${tvar.obsah()} ${tvar.jednotka}². <br>`;
            document.getElementById('vysledek').innerHTML += `Obvod kruhu je ${tvar.obvod()} ${tvar.jednotka}.`;
            break;
        case trojuhelnik:
            document.getElementById('vysledek').innerHTML = `Obsah trojúhelníku je ${tvar.obsah()} ${tvar.jednotka}². <br>`;
            document.getElementById('vysledek').innerHTML += `Obvod trojúhelníku je ${tvar.obvod()} ${tvar.jednotka}.<br>`;
            document.getElementById('vysledek').innerHTML += `Délka výšky trojúhelníku je ${tvar.vyskaUhlopricka()} ${tvar.jednotka}.`;
            break;
    }
};

document.getElementById('vypocet').addEventListener('click', function () {
    fun();
});

document.getElementById('jednotka').addEventListener('click', function () {
    fun();
});

document.getElementById('velikost').addEventListener('change', function () {
    fun();
});
