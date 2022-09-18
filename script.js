let songIndex=0;
let audioElement= new Audio(`./media/.mp3`);
let myProgressBar= document.getElementById('myProgressBar');
let masterPlay=document.getElementById('masterPlay');
let masterSong=document.getElementById('masterSong');
let gif= document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'))

let songs=[
    {songName:'Let Me Love You', filePath:'./media/1.mp3', coverPath:'covers/1.jpg'},
    {songName:'Arms of Gold', filePath:'media/2.mp3', coverPath:'covers/2.jpg'},
    {songName:'Into Your Arms', filePath:'media/3.mp3', coverPath:'covers/3.jpg'},
    {songName:'Aadat', filePath:'media/4.mp3', coverPath:'covers/4.jpg'},
    {songName:'Leviating', filePath:'media/5.mp3', coverPath:'covers/5.jpg'},
    {songName:'Khamoshian', filePath:'media/6.mp3', coverPath:'covers/6.jpg'},
    
]
songItem.map((element,i) => {
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove("fa-solid", "fa-circle-play", "fa-3x");
            masterPlay.classList.add("fa-solid", "fa-circle-pause", "fa-3x");
            gif.style.opacity=1;
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove("fa-solid", "fa-circle-pause", "fa-3x");
            masterPlay.classList.add("fa-solid", "fa-circle-play", "fa-3x");
            gif.style.opacity=0;
        }
})
       audioElement.addEventListener('timeupdate',()=>{ 
      let progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
      myProgressBar.value=progress
    })
    myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=parseInt((myProgressBar.value*audioElement.duration)/100);
    });
    const makeAllPlays=()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove("fa-solid", "fa-circle-pause", "fa-1x")
            element.classList.add("fa-solid","fa-circle-play", "fa-1x")
        })
    }
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            makeAllPlays();
            songIndex= parseInt(e.target.id);
        if(audioElement.paused || audioElement.currentTime<=0){
       e.target.classList.remove("fa-solid","fa-circle-play", "fa-1x");
       e.target.classList.add("fa-solid", "fa-circle-pause", "fa-1x");
       audioElement.src= (`./media/${songIndex+1}.mp3`);
       masterSong.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity=1
       masterPlay.classList.remove("fa-solid","fa-circle-play", "fa-1x");
       masterPlay.classList.add("fa-solid", "fa-circle-pause", "fa-1x"); 
       }
       else{
        audioElement.pause();
        gif.style.opacity=0
       }
        })

        
    })
    document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>=9){
            songIndex=0;
        }
      else{
        songIndex+=1
      }
      audioElement.src= (`./media/${songIndex+1}.mp3`);
    masterSong.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity=1
       masterPlay.classList.remove("fa-solid", "fa-circle-pause", "fa-1x");
            masterPlay.classList.add("fa-solid","fa-circle-play", "fa-1x");
    })
    document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<=0){
            songIndex=0;
        }
      else{
        songIndex-=1
      }
      audioElement.src= (`./media/${songIndex+1}.mp3`);
    masterSong.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity=1
       masterPlay.classList.remove("fa-solid","fa-circle-play", "fa-1x")
            masterPlay.classList.add("fa-solid", "fa-circle-pause", "fa-1x");
    })