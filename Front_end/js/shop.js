document.getElementById('bus').onmouseover = AnimBus
document.getElementById('train').onmouseover = AnimTrain
document.getElementById('bike').onmouseover = AnimBike
document.getElementById('metro').onmouseover = AnimMetro


function AnimBus() {
    bus.innerHTML = " Bus 21 - 21S - 31 - 32 - 35 - 41S - 49 - 57 - 61 - 70 - 80 - 89 : arrêt Cannebière Bourse"
}

function AnimTrain() {
    train.innerHTML = " Tramway  ligne T2 : arrêt Belsunce Alcazar"
}

function AnimMetro() {
    metro.innerHTML = " Métro ligne 1 : arrêt Vieux Port"
}

function AnimBike() {
    bike.innerHTML = " Station Vélib 1302 : Rue Colbert"
}

