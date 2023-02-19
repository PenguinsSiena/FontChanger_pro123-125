leftWristX = 0;
rightWristX = 0;
difference = 0;
function preload(){}
function setup() {
    video = createCapture(VIDEO);
    video.size(400, 350);
    video.position(250, 270);

    canvas = createCanvas(400, 400);
    canvas.position(765, 170);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    go();
}
function modelLoaded(){
    console.log("modal Loaded!");
}
function go(){
    input = document.getElementById("input").value;
    document.getElementById("input").innerHTML = "";
 }
function draw(){
    //background('#c38d9e');
    background('#dea57e');
    fill('#bd446a');
    //square(50, 100, leftWristX, rightWristX, difference)
    textSize(difference);
    text(input, 50, 200);
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX - 100);
        document.getElementById("spantag").innerHTML = "font size is = " + difference + "px";
    }
}
