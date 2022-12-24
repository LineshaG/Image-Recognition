Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("Camera");
Webcam.attach('#camera');

 function Capture(){
    Webcam.snap(function(data_uri) 
    {
    document.getElementById("Result").innerHTML = "<img id='result' src=" + data_uri + ">";
    });
 }

 classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TtYxybVLc/model.json", modelLoaded);
 
 function modelLoaded()
 {
    console.log("modelLoaded");
 }