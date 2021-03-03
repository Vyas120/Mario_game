function preload() {
	world_start = loadSound("world_start.wav");
	jump = loadSound("jump.wav");
	gameover = loadSound("gameover.wav");
	coin = loadSound("coin.wav");
	kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.parent('game_console')
	video.size(850,250);
	posenet = ml5.poseNet(video, modelloaded);
	posenet.on('pose', getposes)
}

function modelloaded(){
	console.log("It works!!")
}

function getposes(poses){
	if(poses.length > 0){
		console.log(poses);
		noseX = poses[0].pose.nose.x;
		noseY = poses[0].pose.nose.y;
	}
}

function draw() {
	game()
}






