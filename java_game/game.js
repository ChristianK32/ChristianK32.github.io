const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d")
let score = 0;

function drawCircle(x,y){
ctx.strokeStyle = "black";
ctx.fillStyle= "orange";
ctx.lineWidth=10;
ctx.beginPath();
ctx.arc(x,y,70,0,6.28);
ctx.stroke();
ctx.fill();

// Write the basketball brand

ctx.font = "25px Arial";
ctx.fillStyle = "black";
ctx.fillText("Spalding", 355, 295);
ctx.strokeStyle = "gray";
ctx.lineWidth = 1;
ctx.strokeText("Spalding", 355, 295);

// middle line 
ctx.fillStyle = "black";
ctx.beginPath();
ctx.rect(330,300,140,5);
ctx.fill();

// upper curve

ctx.strokeStyle = "black";
ctx.lineWidth = 4;

ctx.beginPath();
ctx.moveTo(340, 340);
ctx.quadraticCurveTo(400, 310, 460, 340);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(340, 260);
ctx.quadraticCurveTo(400, 290, 460, 260);
ctx.stroke();
}
drawCircle(400, 300);



 
