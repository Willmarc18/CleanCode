var Ruleta = new Winwheel({
    'numSegments': 36,
    'outerRadius': 250,
    'segments': [
        {'fillStyle': 'black', 'text': '1'},
        {'fillStyle': 'red', 'text': '2'},
        {'fillStyle': 'black', 'text': '3'},
        {'fillStyle': 'red', 'text': '4'},
        {'fillStyle': 'black', 'text': '5'},
        {'fillStyle': 'red', 'text': '6'},
        {'fillStyle': 'black', 'text': '7'},
        {'fillStyle': 'red', 'text': '8'},
        {'fillStyle': 'black', 'text': '9'},
        {'fillStyle': 'red', 'text': '10'},
        {'fillStyle': 'black', 'text': '11'},
        {'fillStyle': 'red', 'text': '12'},
        {'fillStyle': 'black', 'text': '13'},
        {'fillStyle': 'red', 'text': '14'},
        {'fillStyle': 'black', 'text': '15'},
        {'fillStyle': 'red', 'text': '16'},
        {'fillStyle': 'black', 'text': '17'},
        {'fillStyle': 'red', 'text': '18'},
        {'fillStyle': 'black', 'text': '19'},
        {'fillStyle': 'red', 'text': '20'},
        {'fillStyle': 'black', 'text': '21'},
        {'fillStyle': 'red', 'text': '22'},
        {'fillStyle': 'black', 'text': '23'},
        {'fillStyle': 'red', 'text': '24'},
        {'fillStyle': 'black', 'text': '25'},
        {'fillStyle': 'red', 'text': '26'},
        {'fillStyle': 'black', 'text': '27'},
        {'fillStyle': 'red', 'text': '28'},
        {'fillStyle': 'black', 'text': '29'},
        {'fillStyle': 'red', 'text': '30'},
        {'fillStyle': 'black', 'text': '31'},
        {'fillStyle': 'red', 'text': '32'},
        {'fillStyle': 'black', 'text': '33'},
        {'fillStyle': 'red', 'text': '34'},
        {'fillStyle': 'black', 'text': '35'},
        {'fillStyle': 'red', 'text': '36'},
    ],

    'animation': {
        'type': 'spinToStop',
        'duration': 5,
        'callbackFinished': 'Mensaje()',
        'callbackAfter': 'Indicador()'
    }
});


function Mensaje() {
    var SegmentoSeleccionado = Ruleta.getIndicatedSegment();
    alert("Elemento seleccionado:" + SegmentoSeleccionado.text + "!");
    Ruleta.stopAnimation(false);
    Ruleta.rotationAngle = 0;
    Ruleta.draw();
    Indicador();
}

Indicador ();
function Indicador() {
    var ctx = Ruleta.ctx;
    ctx.strokeStyle = 'navy';
    ctx.fillStyle = 'yellow';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(242, 0);
    ctx.lineTo(302, 0);
    ctx.lineTo(272, 40);
    ctx.lineTo(242, 0);
    ctx.stroke();
    ctx.fill();
}

function calcular() {
    var resultado = parseInt(valor1.value) * parseFloat(valor2.value);
    alert("Has Ganado " + resultado);
}