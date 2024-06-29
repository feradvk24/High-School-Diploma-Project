//Date
function showTime() {
  var thetime = new Date();
  document.getElementById("clock").innerHTML = thetime.toLocaleTimeString();
  var day = thetime.getDate();
  var month = thetime.getMonth() + 1;
  var year = thetime.getFullYear();
  document.getElementById("day").innerHTML = day + "." + month + "." + year;
};
var IntervalID = setInterval(showTime, 1000);

