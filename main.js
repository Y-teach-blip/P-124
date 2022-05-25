function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 500);
    canvas.position(600, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function draw()
{
    background('#bcbcf2');
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPose(results)
{
  if(results.length < 0)
  {
    console.log('This is my result');  
    console.log(results);
  }
  else
  {
      console.log('error');
  }
}