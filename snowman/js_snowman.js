const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d") 


function circle(x,y){
ctx.strokeStyle = "red";
ctx.lineWidth=10;
ctx.beginPath();
ctx.arc(x,y,50,0,6.28);
ctx.stroke();
ctx.fill();
}
circle(100, 100);
circle(200, 50);
circle(175, 15);