console.log("Welcome to ProMusic");
// Initialize variable
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let Gif = document.getElementById('Gif');
let masterSongNAme = document.getElementById('masterSongNAme');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let song = [
    {songName: "Yaad Na Aaye - Akull", filePath: "song/1.mp3", coverPath: "photo/1.jpg"},
    {songName: "Mehbooba", filePath: "song/2.mp3", coverPath: "photo/5.jpg"},
    {songName: "Baarish Ki Jaaye - B Praak", filePath: "song/3.mp3", coverPath: "photo/1.jpg"},
    {songName: "Filhaal 2 Mohabbat", filePath: "song/4.mp3", coverPath: "photo/1.jpg"},
    {songName: "Om_Jai_Jagdish_Hare ", filePath: "song/6.mp3", coverPath: "photo/1.jpg"},
    {songName: "Raataan Lambiyan - Shersha", filePath: "song/5.mp3", coverPath: "photo/2.jpg"},
    {songName: "Tumhe Apna Banane Ka", filePath: "song/7.mp3", coverPath: "photo/4.jpg"},
    {songName: "U Antava Mava", filePath: "song/8.mp3", coverPath: "photo/3.jpg"},
]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songlistName")[0].innerText = song[i].songName;
})
// audio Element.play()

// Handle play/pauseclick
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        Gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        Gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressBar.value = progress;
})
myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myprogressBar.value * audioElement.duration)/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex}.mp3` ;
        masterSongNAme.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        Gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex}.mp3` ;
    masterSongNAme.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex}.mp3` ;
    masterSongNAme.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
