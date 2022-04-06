/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

const opening = document.getElementById('opening')
const openButton = document.querySelector('#opening .darken button');

window.addEventListener('DOMContentLoaded', event => {

    openButton.addEventListener('click', function() {
        opening.style.opacity = "0%";
        document.body.style.overflow = "auto";
        setTimeout(() => {
            opening.remove();
        }, 2000);
    })

    const countedDate = document.querySelector('#saveTheDate').dataset.date;
    const countDownDate = new Date(countedDate).getTime();
    
    // Update the count down every 1 second
    const x = setInterval(function() {
    
      // Get today's date and time
      const now = new Date().getTime();
        
      // Find the distance between now and the count down date
      const distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"
    
      document.getElementById('remain-days').innerHTML = twoDigits(days);
      document.getElementById('remain-hours').innerHTML = twoDigits(hours);
      document.getElementById('remain-minutes').innerHTML = twoDigits(minutes);
      document.getElementById('remain-seconds').innerHTML = twoDigits(seconds);
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("saveTheDate").innerHTML = "<div class='col'>Telah Lewat</div>";
      }
    }, 1000);
    
    function twoDigits(number) {
        return number.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })
    }
    
});


