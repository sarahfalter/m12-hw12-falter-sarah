const btn = document.getElementById("clickme");

btn.addEventListener('click', function () {
    let itemsRandom = ['stupify!', 'Aguamenti', 'Alohomora', 'Episky', 'Accio Butterbeer!', 'Immobulus!', 'Confundo!', 'Descendo!', 'Finite Incantatem!', 'Lumos Maxima!'];
    itemsRandom.sort(function (a, b) {
        return 0.5 - Math.random();
    });

    for (var i = 0; i < itemsRandom.length; i++) {
        document.getElementById("content").innerHTML = itemsRandom[i];
    }
});