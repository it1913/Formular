const ctverec = '';
const kruh = 'kruh';
const trojuhelnik = 'trojuhelnik';

let tvar = {
    teleso: ctverec,
    velikost: 0,

    obsah: function (teleso = this.teleso, velikost = this.velikost) {
        switch (teleso) {
            case ctverec: return (velikost * velikost);
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
    }

}

function vypisVysledek() {
    tvar.velikost = document.getElementById("velikost").value;
    if (tvar.velikost != 0) {
        document.getElementById('vysledek').innerHTML = `${tvar.obsah()}, ${tvar.obvod()}`;
    }
}


function setCtverec() {
    tvar.teleso = ctverec;
    vypisVysledek();
}

function setKruh() {
    tvar.teleso = kruh;
    vypisVysledek();
}

function setTrojuhelnik() {
    tvar.teleso = trojuhelnik;
    vypisVysledek();
}


document.getElementById('vypocet').addEventListener('click', function () {
    tvar.velikost = document.getElementById("velikost").value;
    document.getElementById('vysledek').innerHTML = `${tvar.obsah()}, ${tvar.obvod()}`;
});

