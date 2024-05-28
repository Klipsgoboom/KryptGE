function writeText() {
    ctx.font = "16px Arial";
    ctx.fillStyle = color;
    ctx.fillText(setText, Number(coordx), Number(coordy)+16);
}

function clrScr() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function startModules() {
console.log('Graphics initiated')
}

function screenSize(x,y) {
    var canvas = document.getElementById("tftScreen");
    var ctx = canvas.getContext("2d")
    canvas.height = y
    canvas.width = x
}