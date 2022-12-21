song1 = "";
song2 = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function preload(){
    song1 = loadSound("song1.mp3");
    song1 = loadSound("song1.mp3");
    

}
function setup(){
    canvas =createCanvas(500,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);


}
function draw(){
    image(video, 0,0,500,500);
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
    
        leftwristX = results[0].pose.leftWrist.x;
    leftwristY = results[0].pose.leftWrist.y;
    console.log("Left wrist x :"+leftwristX+"Left wrist y :"+leftwristY);
    
    rightwristX = results[0].pose.rightWrist.x;
    rightwristY = results[0].pose.rightWrist.y;
    console.log("Right wrist x :"+rightwristX+"right wrist y :"+rightwristY);
    }
}
    