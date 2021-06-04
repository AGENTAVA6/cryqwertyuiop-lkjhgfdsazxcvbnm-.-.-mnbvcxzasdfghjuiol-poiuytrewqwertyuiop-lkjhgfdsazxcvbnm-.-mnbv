video = "";
objectdetect = ""
status = ""
object = [];
function preload(){
    video = createVideo('video.mp4');
    video.hide()
}
function setup(){
    canvas = createCanvas(480,380 );
    canvas.center();
}
function draw(){
    image(video, 0, 0, 480, 380);
    if(status != ""){
    objectdetect.detect(video,gotresult)
    for(i = 0; i < object.length; i++){
        document.getElementById("status").innerHTML = "Status-(object detected)";
        percent = floor(object[i].confidence * 100);
        fill("#FF0000");
        text(object[i].label + "  " + percent + " % " , object[i].x + 15, object[i].y + 15)
        noFill();
        stroke("#FF0000")
        rect(object[i].x, object[i].y, object[i].width, object[i].height)
    }
    }
}
function start(){
    objectdetect = ml5.objectDetector("cocossd", m);
    document.getElementById("status").innerHTML = "Status:- (Detecting objects)";
}
function m(){
    status = true;
    video.loop();
    console.log("coococococococoocohfuefakulefuliuflbiufewbu    is ok ");
    video.volume(0);
video.speed(1)
}
function gotresult(error,results){
  if(error){
      console.error(error);
  }
  else{
      console.log(results);
      object = results;
  }
}