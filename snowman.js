const canvas = document.getElementById("myCanvas");
const ctx= canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0,0,400,400);

ctx.fillStyle = "white";
ctx.fillRect(0,300,400,100);

function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0.2*Math.PI);
	ctx.fill();
}

function snowman(x,y){
	circle(x,200,40);
        circle(y+50,200,40);
        circle(400,200,40);
}
snowman(200,200);
snowman(100,200):
