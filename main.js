var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
   document.getElementById("textarea1").innerHTML = "";
   recognition.start();
}

recognition.onresult = function (event) {
   console.log(event);

   content = event.results[0][0].transcript;

   document.getElementById("textarea1").innerHTML = content;

   if (content == "selfie") {
      speak();
   }

}

function speak() {
   var synth = window.speechSynthesis;
   speak_data = "Taking your Selfie in 5 seconds";
   var utterThis = new SpeechSynthesisUtterance(speak_data);
   synth.speak(utterThis);
   Webcam.attach(camera);
   setTimeout(function () {
      take_snapshot();
      save();
   }, 5000);
}

function take_snapshot() {
    Webcam.snap(function(data_uri) {
    document.getElementById("div1").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
 });
 }

 function save () {
link = document.getElementById ("link");
image = document.getElementById ("selfie_image").src;
link.href = image;
link.click ();
 }

 camera = document.getElementById("camera");
  Webcam.set({ width:360, height:250, image_format : 'jpeg', jpeg_quality:90 });