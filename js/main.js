
const mainJoyStick = new JoyStick('mainJoy', {
    "title": "Control Silla de Ruedas",
    "internalFillColor": "#90fff0",
    "internalStrokeColor": "#00ffdd",
    "externalStrokeColor": "#00ffdd"
});

var joyStIinputPosX = document.getElementById("joyStPosizioneX");
var joyStInputPosY = document.getElementById("joyStPosizioneY");
var joyStDirezione = document.getElementById("joyStDirezione");
var joyStX = document.getElementById("joyStX");
var joyStY = document.getElementById("joyStY");

setInterval(function(){ joyStIinputPosX.value=mainJoyStick.GetPosX(); }, 50);
setInterval(function(){ joyStInputPosY.value=mainJoyStick.GetPosY(); }, 50);
setInterval(function(){ joyStDirezione.value=mainJoyStick.GetDir(); }, 50);
setInterval(function(){ joyStX.value=mainJoyStick.GetX(); }, 50);
setInterval(function(){ joyStY.value=mainJoyStick.GetY(); }, 50);