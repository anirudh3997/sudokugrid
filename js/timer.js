var minutes = 0,
     hours = 0,
     seconds = 0,
     count = 0,
     timer,
     best = 0,
     bestTime,
     currentTime;

function timecall() {
     bestTime = localStorage['bestTime'];
     if (localStorage['best'] != undefined) {
          best = localStorage['best'];
     }
     var queryString = decodeURIComponent(window.location.search);
     queryString = queryString.substring(1);
     var queries = queryString.split("&");
     hours = queries[2];
     minutes = queries[1];
     seconds = queries[0];
     currentTime = convertTimeToSeconds(hours, minutes, seconds);
     document.getElementById("successId").innerHTML =
     hours + ": " + minutes + ": " + seconds;
     setBestTime(currentTime);

}

function setBestTime(currentTime) {
     if (best == 0) {
          bestTime = currentTime;
          best = 1;

     } else {
          console.log("bestTime: " + bestTime + "currentTime: " + currentTime);
          if (bestTime >= currentTime) {
               bestTime = currentTime;
               console.log("inside if" + bestTime);
          }
     }
     localStorage['best'] = best;
     localStorage['bestTime'] = bestTime;
     convertSecondsToTime(bestTime);
     document.getElementById("bestId").innerHTML = hours + ": " + minutes + ": " + seconds;

}

function convertTimeToSeconds(h, m, s) {
     h = 3600 * h;
     m = 60 * m;
     var convertedTime = +h + +m + +s;
     convertedTime = Number(convertedTime).toString();
     return Number(convertedTime);
}

function convertSecondsToTime(s) {

     if (s >= 60 && s < 3600) {
          minutes = Math.floor(s / 60);
          seconds = s % 60;
     } else if (s >= 3600) {
          hours = Math.floor(s / 3600);
          minutes = (Math.floor(s / 60)) % 60;
          seconds = s % 60;
     } else if (s < 60) {
          seconds = s;
     }
}

function timerFunction() {
     if (count >= 60 && count < 3600) {
          minutes = Math.floor(count / 60);
          seconds = count % 60;
          document.getElementById("timerId").innerHTML = hours + ": " + minutes + ": " + seconds;
     } else if (count >= 3600) {
          hours = Math.floor(count / 3600);
          minutes = (Math.floor(count / 60)) % 60;
          seconds = count % 60;
          document.getElementById("timerId").innerHTML = hours + ": " + minutes + ": " + seconds;
     } else if (count < 60) {
          seconds = count;
          document.getElementById("timerId").innerHTML = hours + ": " + minutes + ": " + seconds;
     }
     count += 1;
     return timer = setTimeout(timerFunction, 1000);
}
