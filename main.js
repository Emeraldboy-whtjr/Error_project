var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function startfunction(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML = content;

    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    
    speak_a = document.getElementById("textbox").innerHTML;

    var utter = new SpeechSynthesisUtterance(speak_a);
    synth.speak(utter);
    
    Webcam.attach(camera);
}

camera = document.getElementById("camera").value;
Webcam.set({
    width : 360, 
    height : 250,
    image_format : "jpeg", 
    png_quality : 90
});
