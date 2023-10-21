const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;
const key = {C: 67};

const c = canvas.getContext("2d");

let drawingColor = "black";
let previousPosition = null ;

function onMouseDown(e) {
    previousPosition = [ e.clientX , e.clientY];
    c.strokeStyle = drawingColor;
    c.lineWidth = 2; 
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp); 
}

function onMouseMove(e){  
    let currentPosition = [ e.clientX , e.clientY ];
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    previousPosition = currentPosition ;
}

function onMouseUp(e){ 
    canvas.removeEventListener("mousemove", onMouseMove);
}

document.addEventListener("keydown", clearCanvas);
function clearCanvas(whenPressKey) {
	if (whenPressKey.keyCode == key.C) {
		c.clearRect(0, 0, canvas.width, canvas.height);
	}
}