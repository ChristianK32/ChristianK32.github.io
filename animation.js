const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let dx = 7;
let dy = 5;

const player = {
	x:200,
	y:200,
	color:'green',
	speed:3

}
function drawPlayer(){
	ctx.fillstyle = player.color;
	ctx.beginPath();
	ctx.arc(
		player.x,
		player.y,
		20,
		0,
		2*Math.PI
	)
	ctx.fill();
}



//define functions
function drawRect(x,y) {
    console.log("drawing rect");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x,y,50,50);
    ctx.fill();
}

function animate() {
    drawRect(x,y);

    // TODO: Add some code here 
    //  that will change the rectangle's position
	x= x + dx;
	y= y + dy;

	if(x>350){
		dx=dx*-1;
	}
        if(x<0){
                dx=dx*-1;
        }
        if(y>350){
                dy=dy*-1;
        }
        if(y<0){
               dy=dy*-1;
        }

	requestAnimationFrame(animate);
}

function handleKeypress(e){
	console.log(e.key);
}

document.addEventListener('keydown'' handleKeyPress)
//call our function
animate();
