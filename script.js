
// Buttons
let previous=document.querySelector('#pre');
let play=document.querySelector('#play');
let next=document.querySelector('#next');

// Title & Artist
let title=document.querySelector('#title');
let artist=document.querySelector('#artist');

//Slider
let slider=document.querySelector('#duration-slider');

//Image
let track_image=document.querySelector('#track_image');

let timer;
let autoplay=1;
let index_no=0;
let playing_song=false;
let track=document.createElement('audio');
let All_song=[
    {
        name: 'Asku Laska',
        path: 'songs/Asku-Laska.mp3',
        img: 'images/nanban2.jpeg',
        artist:'SuVi, Chinmayi, Vijay Prakash'
    },
    {
        name: 'Irukkana',
        path: 'songs/Irukkana.mp3',
        img: 'images/nanban1.jpeg',
        artist:'Vijay Prakash, Javed Ali and Sunandha Chauhan'
    },
    {
        name: 'Unnai Naan',
        path: 'songs/Unnai-Naan.mp3',
        img: 'images/unnai-naan.jpeg',
        artist:'Hariharan'
    },
    {
        name: 'Unnai Partha Pinbu',
        path: 'songs/Unnai-Paartha-Pinbu.mp3',
        img: 'images/ajith.jpeg',
        artist:'Bharadwaj, S. P. Balasubrahmanyam'
    },
]

function load_track(index_no){
    clearInterval(timer);
    reset_slider();

    track.src=All_song[index_no].path;
    title.innerHTML=All_song[index_no].name;
    track_image.src=All_song[index_no].img;
    artist.innerHTML=All_song[index_no].artist;

    timer=setInterval(range_slider,1000);
    tooltipClasses.innerHTML=All_song.length;
    presnet.innerHTML=index_no+1;
}
load_track(index_no);

function justplay(){
    if(playing_song==false){
        playsong();
    }else{
        pausesong();
    }
}

function reset_slider(){
    slider.value=0;
}

 function playsong(){
    track.play();
    playing_song=true;
    play.innerHTML='<i class="fa fa-pause"></i>';
 }

 function pausesong(){
    track.pause();
    playing_song=false;
    play.innerHTML='<i class="fa fa-play"></i>';
 }

 function next_song(){
    if(index_no < All_song.length-1){
        index_no +=1;
        load_track(index_no);
        playsong();   
    }else{
        index_no=0;
        load_track(index_no);
        playsong();
    }
 }

 function previous_song(){
    if(index_no>0){
        index_no -=1;
        load_track(index_no);
        playsong();   
    }else{
        index_no=All_song.length;
        load_track(index_no);
        playsong();
    }
 }

 function change_duration(){
    slider_position=track.duration * (slider.value/100);
    track.currentTime=slider_position;
 }