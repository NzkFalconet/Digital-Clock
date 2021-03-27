

GetTodaysDate =()=>{
  var currentTime= new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  document.querySelector("#hour").innerText=hours;
  document.querySelector("#minute").innerText=minutes;
  document.querySelector("#second").innerText=seconds;
    setTimeout(GetTodaysDate,1000);
}

GetTodaysDate();