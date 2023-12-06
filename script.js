function changeColor(squareId) {
    var square = getElementById("squareId");
    var randomColor = getRandomColor;
    documdocument.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.randome() * 16)];
    }
    return color;
}