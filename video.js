var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML=`${video.volume * 100}%`;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log(`New video speed is" + ${video.playbackRate}`);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = video.playbackRate / 0.95;
	console.log(`New video speed is ${video.playbackRate}`);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log(`Starting location: ${video.currentTime}`);
	video.currentTime += 15;
	if (video.currentTime >= video.duration){
		console.log('Back to the start')
		video.currentTime = 0;
	}
	console.log(`New location: ${video.currentTime}`);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted) {
		video.muted = false;
		document.querySelector('#mute').innerHTML = "Mute";
	}
	else{
		video.muted = true;
		document.querySelector('#mute').innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log(`Change Volume to ${video.volume}`) 
	video.volume = this.value/ 100 %
	document.querySelector("#volume").innerHTML = `${video.volume * 100}%`
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Change Style") 
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Change Back") 
	video.classList.remove("oldSchool")
});