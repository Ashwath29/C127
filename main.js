var song1 = "";
var song2 = "";

function preload() {
    var sound  = loadSound("music.mp3");
    var sound1 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0,0,600,500);
}