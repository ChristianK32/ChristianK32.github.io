const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d")
let score = 0;

function drawCircle(x,y){
ctx.clearRect(0,0,canvas.width,canvas.height);

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

drawScore();
drawUpgradeBox();
drawLeaderboard();
}


function drawUpgradeBox() {
    ctx.fillStyle = "#f8b400"; 
    ctx.fillRect(600, 50, 180, 200); 

    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText("Upgrades", 650, 75);
    ctx.font= "12px Arial";
	ctx.fillText("Buy layup ($10 +2 per click)", 620, 100);
}
function drawLeaderboard() {
    ctx.fillStyle = "#f8b400";
    ctx.fillRect(50, 50, 180, 200);

    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText("Leaderboard", 100, 75);
    ctx.font = "12px Arial";
    ctx.fillText("1. Lebron James(40,000)", 70, 100);

    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText("Leaderboard", 100, 75);
    ctx.font = "12px Arial";
    ctx.fillText("2. Michael Jordan(38,000)", 70,120);

    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText("Leaderboard", 100, 75);
    ctx.font = "12px Arial";
    ctx.fillText("3. Kevin Durant(30,571)", 70, 140);

    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText("Leaderboard", 100, 75);
    ctx.font = "12px Arial";
    ctx.fillText("4. Carmelo Anthony(28,289)", 70, 160);

    ctx.fillStyle = "black";
    ctx.font = "18px Arial";
    ctx.fillText("Leaderboard", 100, 75);
    ctx.font = "12px Arial";
    ctx.fillText("5. Christian Keng(25,000)", 70, 180);

  
}




function updateScore() {
	score++;
	drawCircle(400, 300);
}	

function drawScore() {
	ctx.font="16px Arial";
	ctx.fillStyle="gray";
	ctx.fillText("Score: " + score,8, 20);
}





drawCircle(400, 300);
canvas.addEventListener("click", updateScore); 
