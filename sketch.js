var bg_img, splash_img;
var player_img, player;
var playButton, infoButton;
var gameState = "wait";


function preload(){
    splash_img = loadImage("assets/Game_On.gif");
    bg_img = loadImage("assets/bg.png")
    player_img = loadImage("assets/player.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    playButton = createImg("assets/play.jpg");
    playButton.position(width/4,windowHeight/4);
    playButton.size(80,80);
    playButton.hide();

    infoButton = createImg("assets/info.jpg");
    infoButton.position(width/4-100,windowHeight/4);
    infoButton.size(80,80);
    infoButton.hide();

    player = createSprite(windowWidth/15-120,windowHeight-120);
    player.addImage(player_img);
    player.scale = 0.9
    player.visibile = false;
}

function draw(){
    if(gameState == "wait"){
        background(splash_img);
        playButton.show();
        infoButton.show();
    }
}