noseX=0;
noseY=0;
difference=0;
rightWrist=0;
leftWrist=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 400);
    canvas.position(600, 150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    document.getElementById("square_1").innerHTML = "Width and Hight of the square will be =" + difference + "px";
    background('#969A97');
    fill('#0307fc');
    stroke('#fc0303');
    square(noseX,noseY,difference);
}

function modalLoaded() {
    console.log('PoseNet Is Initialized!');
}
 
function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY); 
        
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);

        console.log("leftWrist = " + leftWrist + "rightWrist" + rightWrist);
    }
}
