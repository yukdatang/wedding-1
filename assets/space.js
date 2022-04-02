const button = document.querySelector(".button");
const buttonText = document.querySelector(".button p");
const thankText = document.querySelector(".button p:last-child");
const mainContent = document.querySelector(".main");
const bismillahAudio = document.getElementById('audio-bismillah');
const ayatAudio = document.getElementById('audio-ayat');

AOS.init();

const timeLine = new TimelineMax({
	paused: false
});

bismillahAudio.onended = () => {
  ayatAudio.play();
}

button.addEventListener("click", () => {
  bismillahAudio.play()
	timeLine
		.to(buttonText, 0.6, {
			opacity: 0
		})
		.to(button, 0.8, {
			height: 0.2,
			opacity: 0.5,
			boxShadow: "0px 0px 35px 7px #cd28fa",
			delay: 0.25
		})
		.to(button, 0.1, {
			opacity: 0.5,
			background: "#26ff92"
		})
		.to(button, 0, {
			width: 1,
			delay: 0.2
		})
		.to(button, 0.1, {
			boxShadow: "0px 0px 100px 55px #fa2856",
			y: 190,
			height: 100,
			delay: 0.23
		})
		.to(button, 0.3, {
			height: 1000,
			y: -15000,
			boxShadow: "0px 0px 85px 17px #fa2856",
			delay: 0.2
		})
    .to('body', 0, {
        display: 'block'
    })
    .to(mainContent, 0, {
        display: 'block'
    })
		.to(mainContent, 1, {
			opacity: 1,
			delay: 0.3
		})
});

// Set the date we're counting down to

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
