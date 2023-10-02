// const video = document.querySelector('.video');
// const mainVideo = document.getElementById('video');
// const currentVideo = video.querySelector('.video-current');
// const durationVideo = video.querySelector('.video-duration');

// mainVideo.addEventListener('loadeddata', (event) => {
// 	mainVideo.volume = 0.5;
// 	durationVideo.innerText = formatTime(event.target.duration)
// })

// const formatTime = time => {
// 	let seconds = Math.floor(time % 60);
// 	let minutes = Math.floor(time / 60) % 60;
// 	let hours = Math.floor(time / 3600);

// 	seconds = seconds < 10 ? `0${seconds}` : seconds;
// 	minutes = minutes < 10 ? `0${minutes}` : minutes;
// 	hours = hours < 10 ? `0${hours}` : hours;

// 	if(hours == 0) {
// 		return `${minutes}:${seconds}`;
// 	}
// 	return `${hours}:${minutes}:${seconds}`
// }

// //---------------------Play/pause------------------------//
// const btnPause = video.querySelector('.video-pause');
// const btnPlay = video.querySelector('.video-play');

// btnPlay.addEventListener('click', () => {
// 	btnPlay.classList.add('hide');
// 	btnPause.classList.remove('hide');
// 	mainVideo.play()
// })

// btnPause.addEventListener('click', () => {
// 	btnPlay.classList.remove('hide');
// 	btnPause.classList.add('hide');
// 	mainVideo.pause()
// })
// //-----------------------------------------------------//


// //-----------------Progress bar----------------------------//
// const progressBar = video.querySelector('.progress-bar');

// mainVideo.addEventListener('timeupdate', (event) => {
// 	let { currentTime, duration } = event.target;
// 	let percent = (currentTime / duration) * 100;
// 	progressBar.style.width = `${percent}%`;
// 	currentVideo.innerText = formatTime(currentTime);
// })

// //---------------------------------------------------------//


// //-----------------------Volume---------------------------//
// const volume = video.querySelector('.video-volume');
// const btnVolumeOn = video.querySelector('.video-vol-on');
// const btnVolumeOff = video.querySelector('.video-vol-off');
// const volumeSlider = video.querySelector('.video-volume__range');

// btnVolumeOff.addEventListener('click', () => {
// 	mainVideo.volume = 0.5;
// 	btnVolumeOff.classList.add('hide');
// 	btnVolumeOn.classList.remove('hide');

// 	volumeSlider.value = mainVideo.volume;
// })

// btnVolumeOn.addEventListener('click', () => {
// 	mainVideo.volume = 0;
// 	btnVolumeOff.classList.remove('hide');
// 	btnVolumeOn.classList.add('hide');

// 	volumeSlider.value = mainVideo.volume;
// })

// volumeSlider.addEventListener('input', (event) => {
// 	mainVideo.volume = event.target.value;

// 	if(+event.target.value === 0) {
// 		btnVolumeOff.classList.remove('hide');
// 		btnVolumeOn.classList.add('hide');
// 	} else {
// 		btnVolumeOff.classList.add('hide');
// 		btnVolumeOn.classList.remove('hide');
// 	}
// })
// //--------------------------------------------------------//


// //-----------------Full screen---------------------------//
// const fullScreenOn = video.querySelector('.video-full-on');
// const fullScreenOff = video.querySelector('.video-full-off');
// const btnFullScreen = video.querySelector('.video-full');

// btnFullScreen.addEventListener('click', () => {
// 	video.classList.toggle('fullscreen');

// 	if(document.fullscreenElement) {
// 		fullScreenOn.classList.toggle('hide');
// 		fullScreenOff.classList.toggle('hide')
// 		return document.exitFullscreen();
// 	}

// 	fullScreenOn.classList.toggle('hide');
// 		fullScreenOff.classList.toggle('hide')
// 		video.requestFullscreen();
// })

// // fullScreenOn.addEventListener('click', () => {
// // 	video.classList.add('fullscreen');
// // 	fullScreenOn.classList.add('hide');
// // 	fullScreenOff.classList.remove('hide');
// // 	// video.requestFullscreen();
// // })

// // fullScreenOff.addEventListener('click', () => {
// // 	video.classList.remove('fullscreen');
// // 	fullScreenOn.classList.remove('hide');
// // 	fullScreenOff.classList.add('hide');
// // 	// document.exitFullscreen();
// // })
// //-------------------------------------------------------//


// //----------------------Timeline-------------------------//
// const timeline = video.querySelector('.progress-area');

// const draggableProgressBar = () => {
// 	let timelineWidth = timeline.clientWidth;
// 	progressBar.style.width = `${event.offsetX}px`;
// 	mainVideo.currentTime = (event.offsetX / timelineWidth) * mainVideo.duration;
// 	currentVideo.innerText = formatTime(mainVideo.currentTime);
// }

// timeline.addEventListener('click', (event) => {
// 	let timelineWidth = timeline.clientWidth;
// 	mainVideo.currentTime = (event.offsetX / timelineWidth) * mainVideo.duration;
// })

// timeline.addEventListener('mousedown', () => {
// 	timeline.addEventListener('mousemove', draggableProgressBar);
// })

// video.addEventListener('mouseup', () => {
// 	timeline.removeEventListener('mousemove', draggableProgressBar);
// })
// //------------------------------------------------------//