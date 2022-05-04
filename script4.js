function clock(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let am_pm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; //  '0' => '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + am_pm;
  return strTime;
}

console.log(clock(new Date()));
//solution 2
/*function currentTime(time) {
  return time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}
let time = new Date();
console.log(currentTime(time));
*/
