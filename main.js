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

function Identify()
{
   img = document.getElementById("result");
   classifier.classify(img, gotResult);
}

function gotResult(error, result)
{
   if (error)
   console.log(error);

   else {
      console.log(result);
      document.getElementById("Obj_name").innerHTML = result[0].label;
      document.getElementById("Obj_accuracy").innerHTML = result[0].confidence.toFixed(3);
   }
}