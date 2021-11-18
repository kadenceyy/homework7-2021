var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(video.currentTime);
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old video speed is" + video.playbackRate);
	video.playbackRate = 0.5;
	console.log("New video speed is" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old video speed is" + video.playbackRate);
	video.playbackRate = 2;
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead by 15sec" + video.currentTime);
	video.currentTime = 15;
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
	console.log("Change Volume") 
	video.volume = this.value/ 100 %
	document.querySelector("#volume").innerHTML = `${video.volume * 100}%`
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Change Style") 
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Change Style") 
	video.classList.remove("oldSchool")
});
