function convertNum(num){
  if ( num < 10){
    return "0" + num;
  }
  return num;
}

function calcTime(offset){
  var d = new Date();
  var killo = 1000;
  var utc = d.getTime() + (d.getTimezoneOffset() * 60*killo);
  var nd = new Date(utc + (3600*killo*offset));
  return convertNum(nd.getHours()) + ":" + convertNum(nd.getMinutes());
}
// string ==> "hh:mm"
function sfToTokyo(string){
  var hour = parseInt(string.split(":")[0]);
  var minute = string.split(":")[1];
  var tokyoHour = (hour - 7) < 0 ? hour + 17 : hour - 7;
  return convertNum(tokyoHour) + ":" +  minute;
}

function tokyoToSf(string){
  var hour = parseInt(string.split(":")[0]);
  var minute = string.split(":")[1];
  var sfHour = (hour + 7) % 24 
  return convertNum(sfHour) + ":" +  minute;
}

function sfToGuatemala(string){
  var hour = parseInt(string.split(":")[0]);
  var minute = string.split(":")[1];
  var GuatemalaHour = (hour + 2) % 24 
  return convertNum(GuatemalaHour) + ":" +  minute;
}
function guatemalaToSf(string){
  var hour = parseInt(string.split(":")[0]);
  var minute = string.split(":")[1];
  var sfHour = (hour - 2) < 0 ? hour + 22 : hour -2; 
  return convertNum(sfHour) + ":" +  minute;
}
