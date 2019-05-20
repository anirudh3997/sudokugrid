var minutes = 0,
          hours = 0,
          seconds = 0,
          count = 0,
          timer;

function timecall() {
          var queryString = decodeURIComponent(window.location.search);
          queryString = queryString.substring(1);
          var queries = queryString.split("&");
          document.getElementById("successId").innerHTML = "Time Taken to solve" + queries[2] + ": " + queries[1] + ": " + queries[0];
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
          console.log("hours: " + hours + " minutes: " + minutes + " seconds: " + seconds);
          return timer = setTimeout(timerFunction, 1000);
}
