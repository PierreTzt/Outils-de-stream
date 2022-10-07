    // // // 10 minutes from now
    // // var time_in_minutes = 75;
    // // var current_time = Date.parse(new Date());
    // // var deadline = new Date(current_time + time_in_minutes*60*1000);


    // // function time_remaining(endtime){
    // //   var t = Date.parse(endtime) - Date.parse(new Date());
    // //   var seconds = Math.floor( (t/1000) % 60 );
    // // //	var minutes = Math.floor( (t/1000/60) % 60 );
    // //   var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    // //   var hours = Math.floor( (t/(1000*60*60)) % 24 );
    // //   var days = Math.floor( t/(1000*60*60*24) );
    // //   return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
    // // }
    // // function run_clock(id,endtime){
    // //   var clock = document.getElementById(id);
    // //   function update_clock(){
    // //     var t = time_remaining(endtime);
    // //     clock.innerHTML = `<table text-align:"centre">
    // //     <thead>
    // //     <tr>
    // //       <th>${t.hours}h</th>
    // //     </tr>
    // //     </thead>
    // //     </table>
    // //     <table>
    // //     <tbody>
    // //     <tr>
    // //       <td>${t.minutes}m</td>
    // //       <td>${t.seconds}sec</td>
    // //     </tr>
    // //     </tbody>
    // //   </table>`;
    // //     if(t.total<=0){ clearInterval(timeinterval); }
    // //   }
    // //   update_clock(); // run function once at first to avoid delay
    // //   var timeinterval = setInterval(update_clock,1000);
    // // }
    // // run_clock('clockdiv',deadline);



    // function countdown() {
    //   // Set the date we're counting down to
    //   // 60000 (1 second in ms) * 60 (1 minute in seconds)
    //   var countDownDate = Date.now() + 75000 * 60;
    
    //   // Update the count down every 1 second
    //   var x = setInterval(function() {
    //     // Get today's date and time
    //     var now = Date.now();
    
    //     // Find the distance between now and the count down date
    //     var distance = countDownDate - now;
    
    //     // Time calculations for days, hours, minutes and seconds
    //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    //     // Display the result in the element with id="demo"
    //     document.getElementById("clockdiv").innerHTML = minutes;
    //     document.getElementById("clockdiv_ms").innerHTML = seconds;
    
    //     // If the count down is finished, write some text
    //     if (distance < 0) {
    //       clearInterval(x);
    //       document.getElementById("clockdiv").innerHTML = "";
    //       document.getElementById("clockdiv_ms").innerHTML = "";
    //     }
    //   }, 1000);
    // }

    const departMinutes = 75
let temps = departMinutes * 60

const timerElement = document.getElementById("timer")
const timerElement_ms = document.getElementById("timer_ms")

setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)


  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}
  `
  timerElement_ms.innerText = `${secondes} s`

  temps = temps <= 0 ? 0 : temps - 1
}, 1000)