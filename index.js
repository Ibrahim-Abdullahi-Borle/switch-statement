let x = 1;
let bulb;

switch (x) {
  case 0:
    bulb = "OFF";
    console.log(bulb);
    break;
  case 1:
    bulb = "ON";
    console.log(bulb);
    break;
  default:
    bulb = "the light is not working";
    console.log(bulb);
}

let day = "friday";

switch (day) {
  case "monday":
    console.log("today is monday");
    break;
  case "tuesday":
    console.log("today is tuesday");
    break;
  case "wednesday":
    console.log("today is wednesday");
    break;
  case "thursday":
    console.log("today is thursday");
    break;
  case "friday":
    console.log("today is friday");
    break;
  default:
    console.log("i dont know the date");
}