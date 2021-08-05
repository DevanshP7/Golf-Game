canvas = new fabric.Canvas("Canvas");

ball_X = 0;
ball_Y = 0;

hole_X = 800;
hole_Y = 400;

block_image_width = 5;
block_image_height = 5;

function load_img(){

fabric.Image.fromURL("golf-h.png", function(Img){

hole = Img;
hole.scaleToWidth(50);
hole.scaleToHeight(50);
hole.set({
top:hole_Y,
left:hole_X
});
canvas.add(hole);
});
new_image();
}

function new_image(){

fabric.Image.fromURL("ball.png", function(Img){

ball = Img;
ball.scaleToWidth(50);
ball.scaleToHeight(50);
ball.set({
top:ball_Y,
left:ball_X
});
canvas.add(ball);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

keyPressed = e.keyCode;
console.log(keyPressed);
if(( ball_X == hole_X ) && ( ball_Y == hole_Y )){
canvas.remove(ball);
document.getElementById("header").innerHTML = "You have hit the goal!!!";
document.getElementById("Canvas").style.borderColor = "red";
}
	
else if(keyPressed == '38'){
up();
console.log("up");
}

else if(keyPressed == '40'){
down();
console.log("down");
}

else if(keyPressed == '37'){
left();
console.log("left");
}

else if(keyPressed == '39'){
right();
console.log("right");
}

function up(){

	if( ball_Y > 0 ){
		
	ball_Y = ball_Y - block_image_height;
	console.log("Block image height = " + block_image_height);
	console.log("When Up clicked, X = " + ball_X + " | Y = " + ball_Y);
	canvas.remove(ball);
	new_image();
		
	}
		
	}
		
	function down(){
		
	if( ball_Y < 450 ){
		
	ball_Y = ball_Y + block_image_height;
	console.log("Block image height = " + block_image_height);
	console.log("When Down clicked, X = " + ball_X + " | Y = " + ball_Y);
	canvas.remove(ball);
	new_image();
		
	}
	
	}
		
	function left(){
		
	if(ball_X > 0){
		
	ball_X = ball_X - block_image_width;
	console.log("Block image width = " + block_image_width);
	console.log("When Left clicked, X = " + ball_X + " | Y = " + ball_Y);
	canvas.remove(ball);
	new_image();
		
	}
		
	}
		
	function right(){
		
	if(ball_X < 1050){
		
	ball_X = ball_X + block_image_width;
	console.log("Block image width = " + block_image_width);
	console.log("When Right clicked, X = " + ball_X + " | Y = " + ball_Y);
	canvas.remove(ball);
	new_image();
		
	}
		
	}
	
}

