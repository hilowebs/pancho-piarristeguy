var fiTelarañasAudio1 = document.getElementById('fiTelarañasAudio1');
var fiTelarañasPlayPauseBTN1 = document.getElementById('fiTelarañasPlayPauseBTN1');
var fiTelarañasCount1 = 0;

function fiTelarañasPlayPause1(){
	if(fiTelarañasCount1  == 0){
		fiTelarañasCount1  = 1;
		fiTelarañasAudio1.play();
		fiTelarañasPlayPauseBTN1.innerHTML = "||";
	}else{
		fiTelarañasCount1 = 0;
		fiTelarañasAudio1.pause();
		fiTelarañasPlayPauseBTN1.innerHTML = "►";
	}
}
 
function fiTelarañasStop1(){
    fiTelarañasPlayPause1()
    fiTelarañasAudio1.pause();
	fiTelarañasAudio1.currentTime = 0;
	fiTelarañasPlayPauseBTN1.innerHTML = "►";
}

/* -------------------------------------------------------------- */

var fiTelarañasAudio2 = document.getElementById('fiTelarañasAudio2');
var fiTelarañasPlayPauseBTN2 = document.getElementById('fiTelarañasPlayPauseBTN2');
var fiTelarañasCount2 = 0;

function fiTelarañasPlayPause2(){
	if(fiTelarañasCount2  == 0){
		fiTelarañasCount2  = 1;
		fiTelarañasAudio2.play();
		fiTelarañasPlayPauseBTN2.innerHTML = "||";
	}else{
		fiTelarañasCount2 = 0;
		fiTelarañasAudio2.pause();
	    fiTelarañasPlayPauseBTN2.innerHTML = "►";
	}
}
 
function fiTelarañasStop2(){
	fiTelarañasPlayPause2()
	fiTelarañasAudio2.pause();
	fiTelarañasAudio2.currentTime = 0;
    fiTelarañasPlayPauseBTN2.innerHTML = "►";
}

/* -------------------------------------------------------------- */

var fiTelarañasAudio3 = document.getElementById('fiTelarañasAudio3');
var fiTelarañasPlayPauseBTN3 = document.getElementById('fiTelarañasPlayPauseBTN3');
var fiTelarañasCount3 = 0;

function fiTelarañasPlayPause3(){
	if(fiTelarañasCount3  == 0){
		fiTelarañasCount3  = 1;
		fiTelarañasAudio3.play();
		fiTelarañasPlayPauseBTN3.innerHTML = "||";
	}else{
		fiTelarañasCount3 = 0;
		fiTelarañasAudio3.pause();
        fiTelarañasPlayPauseBTN3.innerHTML = "►";
	}
}
 
function fiTelarañasStop3(){
	fiTelarañasPlayPause3()
	fiTelarañasAudio3.pause();
	fiTelarañasAudio3.currentTime = 0;
	fiTelarañasPlayPauseBTN3.innerHTML = "►";
}

/* -------------------------------------------------------------- */

var fiTelarañasAudio4 = document.getElementById('fiTelarañasAudio4');
var fiTelarañasPlayPauseBTN4 = document.getElementById('fiTelarañasPlayPauseBTN4');
var fiTelarañasCount4 = 0;

function fiTelarañasPlayPause4(){
	if(fiTelarañasCount4  == 0){
		fiTelarañasCount4  = 1;
		fiTelarañasAudio4.play();
		fiTelarañasPlayPauseBTN4.innerHTML = "||";
	}else{
		fiTelarañasCount4 = 0;
		fiTelarañasAudio4.pause();
		fiTelarañasPlayPauseBTN4.innerHTML = "►";
	}
}
 
function fiTelarañasStop4(){
	fiTelarañasPlayPause4()
    fiTelarañasAudio4.pause();
    fiTelarañasAudio4.currentTime = 0;
	fiTelarañasPlayPauseBTN4.innerHTML = "►";
}

/* -------------------------------------------------------------- */

var fiTelarañasAudio5 = document.getElementById('fiTelarañasAudio5');
var fiTelarañasPlayPauseBTN5 = document.getElementById('fiTelarañasPlayPauseBTN5');
var fiTelarañasCount5 = 0;

function fiTelarañasPlayPause5(){
	if(fiTelarañasCount5  == 0){
		fiTelarañasCount5  = 1;
		fiTelarañasAudio5.play();
		fiTelarañasPlayPauseBTN5.innerHTML = "||";
	}else{
		fiTelarañasCount5 = 0;
		fiTelarañasAudio5.pause();
        fiTelarañasPlayPauseBTN5.innerHTML = "►";
	}
}
 
function fiTelarañasStop5(){
	fiTelarañasPlayPause5()
    fiTelarañasAudio5.pause();
	fiTelarañasAudio5.currentTime = 0;
	fiTelarañasPlayPauseBTN5.innerHTML = "►";
}

/* -------------------------------------------------------------- */

var fiTelarañasAudio6 = document.getElementById('fiTelarañasAudio6');
var fiTelarañasPlayPauseBTN6 = document.getElementById('fiTelarañasPlayPauseBTN6');
var fiTelarañasCount6 = 0;

function fiTelarañasPlayPause6(){
	if(fiTelarañasCount6  == 0){
		fiTelarañasCount6  = 1;
        fiTelarañasAudio6.play();
		fiTelarañasPlayPauseBTN6.innerHTML = "||";
	}else{
		fiTelarañasCount6 = 0;
		fiTelarañasAudio6.pause();
		fiTelarañasPlayPauseBTN6.innerHTML = "►";
	}
}
 
function fiTelarañasStop6(){
	fiTelarañasPlayPause6()
    fiTelarañasAudio6.pause();
	fiTelarañasAudio6currentTime = 0;
    fiTelarañasPlayPauseBTN6.innerHTML = "►";
}