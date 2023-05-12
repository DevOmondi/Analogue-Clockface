function clockFace(){
    // Get current Hour
const currentHour = new Date().getHours();
// console.log("currentHour:",currentHour)

// Get current minutes
const currentMinutes = new Date().getMinutes();
// console.log("currentMinutes:",currentMinutes);

// Get current seconds
const currentSeconds = new Date().getSeconds();
// console.log("currentSeconds:",currentSeconds);

// Get rotation angles
const fullHours = 24;
const clockFullDegrees = 360;
const faceHours = 12;
const faceMinutesSeconds = 60;
// Hour rotation angle
const hourRotationAngle = ((fullHours-currentHour)* clockFullDegrees)/faceHours;
// console.log("hourRotationAngle:",hourRotationAngle);

// Minute rotation angle
const minuteRotationAngle = (currentMinutes*clockFullDegrees)/faceMinutesSeconds;
// console.log("minuteRotationAngle:",minuteRotationAngle);

// Second rotation angle
const secondRotationAngle = (currentSeconds*clockFullDegrees)/faceMinutesSeconds;
// console.log("secondRotationAngle:",secondRotationAngle);

// Get svg elements
const secondHand = document.getElementById("seconds");
const minuteHand = document.getElementById("minutes");
const hourHand = document.getElementById("hours");

hourHand.setAttribute("transform",`rotate(${hourRotationAngle},244,251)`)
minuteHand.setAttribute("transform",`rotate(${minuteRotationAngle},244,251)`)
secondHand.setAttribute("transform",`rotate(${secondRotationAngle},244,251)`)
}

setInterval(clockFace,1000)