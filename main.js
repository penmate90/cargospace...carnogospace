//Create a reference for canvas 
canvas=document.getElementById("mycanvas");
ctx= canvas.getContext('2d');

//Give specific height and width to the car image
cerw=75;
cerh=100;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";
cerx=5;
cery=225;
//Set initial position for a car image.


function add() {
	backimgtag= new Image();
	backimgtag.onload=uploadBackground;
	backimgtag.src=background_image;

	cerimgtag= new Image();
	cerimgtag.onload=uploadgreencar;
	cerimgtag.src=greencar_image;
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	ctx.drawImage(backimgtag, 0, 0, canvas.width, canvas.height);
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	ctx.drawImage(cerimgtag, cerx, cery, cerw, cerh);
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{ 
	if (cery >=0) {
		cery=cery-10;
		console.log("UPIFIED heres y= "+cery);
		uploadBackground();
		uploadgreencar();

	}
	//Define function to move the car upward
}

function down()
{
	if (cery <=400) {
	cery=cery+10;
	console.log("DOWNIFIED heres y= "+cery);
	uploadBackground();
	uploadgreencar();

}
	//Define function to move the car downward
}

function left()
{
	if (cerx <=800) {
		cerx=cerx-10;
		console.log("LEFTIFIED heres x= "+cerx);
		uploadBackground();
		uploadgreencar(); }
	//Define function to move the car left side
}

function right()
{
	if (cerx >=0) {
		cerx=cerx+10;
		console.log("RIGHTIFIED heres x= "+cerx);
		uploadBackground();
		uploadgreencar(); }
	//Define function to move the car right side
}
