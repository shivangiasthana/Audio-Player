const playBtn = document.getElementById("playButton")
const myAudio = document.getElementById('mySong')
const player = document.getElementById('player')
const myCanvas = document.getElementById('myCanvas')
var myInterval
var musicProgressBar = new Array();
for(var i =0; i<200; i++){
    musicProgressBar[i] = Math.floor(Math.random() * 100)-50;
}
var count = 0
var width = 1;
var startPosition=0;

function audioEnd(){
    player.src= "../play.png"
    draw()
    count = 0;
    startPosition = 0;
}
function clicked(e){
    var evt = window.event || e
    var xCoord = evt.clientX
    var percent = (xCoord/screen.width)
    myAudio.currentTime = percent * myAudio.duration
    var updateColor = Math.floor(percent * 150)
    var canvas = document.getElementById('myCanvas')
    var ctx = canvas.getContext("2d")
    ctx.fillStyle='blue'
    for(var i = count ; i <updateColor; i++){
        var h = musicProgressBar[i]
        ctx.fillRect(startPosition, canvas.height-80,width, h)
        startPosition = startPosition+2
    }
    count= i   
}
function changeColour(){
    console.log('count', count)
if(myAudio.paused){
    clearInterval(myInterval)
}
var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext("2d")
ctx.fillStyle='blue'
var h = musicProgressBar[count]
ctx.fillRect(startPosition, canvas.height-80,width, h)
startPosition = startPosition+2
count= count+1;   
}

function playMusic(){
var length = myAudio.duration
    if(myAudio.paused)
    {
         myAudio.play();
         player.src= "../pause.png"
         myInterval = setInterval(changeColour,180) 
    }
    else
    {
        myAudio.pause()
        player.src= "../play.png"
    }
}
    function draw(){
        var canvas = document.getElementById('myCanvas')
        var ctx = canvas.getContext("2d")
        //var musicProgressBar = [-30,-40,-50,-60,-40,-20,-30,-50,-60,-40,-10,-40,-40,-50,-60,-60,-50,-50,-60,100,-100, -300]        
        // var musicProgressBar = new Array();
        var width = 1;
        var startPosition=0;
        ctx.fillStyle='red'
        for(var i = 0 ; i <musicProgressBar.length; i++){
        var h = musicProgressBar[i]
        ctx.fillRect(startPosition, canvas.height-80,width, h)
        startPosition = startPosition+2
        }
    }
playBtn.addEventListener("click", playMusic)
