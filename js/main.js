
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB-P7Yx01Zj080gOMZi7gYjv1cAISOf8N8",
    authDomain: "arduinointernet-1697e.firebaseapp.com",
    databaseURL: "https://arduinointernet-1697e-default-rtdb.firebaseio.com",
    projectId: "arduinointernet-1697e",
    storageBucket: "arduinointernet-1697e.appspot.com",
    messagingSenderId: "926279579351",
    appId: "1:926279579351:web:be636c54415f4a68f0e292"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const uploadDataToFirebase = (xvalue, yvalue) =>{
    firebase.database().ref().push().set(
        {
            xvalue: xvalue,
            yvalue: yvalue
        });
}

// Configuracion del JoyStick
const MillisSecsUploadCheckJoystick = 50;

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

const ContMaxTimesPerLectureUplaodData = 1000;
let contTimes = 0;
// ContMaxTimesPerLectureUplaodData * MillisSecsUploadCheckJoystick = X mills
// e.g 4 * 50 = 200 ms
// cada 200 ms se subiran datos a firestore

const updateInputData = () => {
    joyStIinputPosX.value = mainJoyStick.GetPosX();
    joyStInputPosY.value = mainJoyStick.GetPosY();
    joyStDirezione.value = mainJoyStick.GetDir();
    joyStX.value = mainJoyStick.GetX();
    joyStY.value = mainJoyStick.GetY();
    if(contTimes >= ContMaxTimesPerLectureUplaodData){
        uploadDataToFirebase(mainJoyStick.GetX(), mainJoyStick.GetY());
        contTimes = 0;
    }
    else{ 
        contTimes += 1;
    }

}

setInterval(() => {
    updateInputData();
}, MillisSecsUploadCheckJoystick);
