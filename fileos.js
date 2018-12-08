function load(){
	check=true;
	if(document.getElementById('logo').value!=''){
		checkname=false;
		nameBubato=document.getElementById('logo').value;
	}
	nameMusic=document.getElementById("music").value;
	document.getElementById("canvas").style.display='inline';
	document.getElementById("input").style.display='none';
    document.getElementById("canvas").height=screen.height-20;
    document.getElementById("canvas").width=screen.width-20;
    if(nameMusic==''){nameMusic='Samsara - Tungevaag & Raaban - Tina Boo Choreography.mp3';}
    initMp3Player();
}  
var checkname=true;  
i=setInterval(function(){
    if(check){
    	nameBackground=document.getElementById("background").value;
    	if(nameBackground==''){nameBackground='background.jpg';}
    	audio.src = nameMusic;
    	audio.play();
    	check=false;
    	clearInterval(i);
    }
},400);
var check=false;
var audio = new Audio();
var nameMusic;
var nameBackground='background.png';
audio.controls = false;
audio.loop = true;
audio.autoplay = false;
var  source,analyser, fbc_array;
function initMp3Player(){
	var context = new AudioContext();
	analyser = context.createAnalyser(); 
	source = context.createMediaElementSource(audio); 
	source.connect(analyser);
	analyser.connect(context.destination);
	frameLooper();
}
var background_width=screen.width;
var background_height=screen.height;
var bubato_height=20;
var bubato_width=40;
var nameBubato='yelow.png';
var col=[];
var scoll_y=2000;
var nameElectric='col2.png';
for(i=0;i<=40;i++){
	col.push(0);
}
setInterval(function(){
function drawImageAtAngle(image,X,Y,width,height,degrees){
    var radians=degrees*Math.PI/180;
    var halfWidth=width/2;
    var halfHeight=height;
    context0.beginPath();
    context0.save();
    context0.translate(X,Y);
    context0.rotate(radians);
    context0.drawImage(image,-halfWidth,-halfHeight,width,height);
    context0.restore();
}	
var canvas0 = document.getElementById("canvas");
var context0 = canvas0.getContext('2d');
var bubato = new Image();
var background = new Image();

	  bubato.src=nameBubato;
	  background.src=nameBackground;
	  context0.clearRect(0,0,canvas0.width,canvas0.height);
	  context0.drawImage(background,window.innerWidth/2-background_width/2,window.innerHeight/2-background_height/2,background_width,background_height);
	  if(document.getElementById("drop").checked){
	      var scoll = new Image();
	      scoll.src='scoll.png';
          context0.drawImage(scoll,0,scoll_y,screen.width,screen.width*4.1);
      }    
      var collum=new Image();
      collum.src=nameElectric;
      if(document.getElementById("rotatory").checked){
       for(i=1;i<=20;i++){
      	  drawImageAtAngle(collum,window.innerWidth/2-bubato_width/2+30,screen.height/2-40,20+10*4*width/250*a,-col[i]*1.2*Math.pow(a,0.1),0+18*i+rotate);
       } 
       for(i=21;i<=40;i++){
      	  drawImageAtAngle(collum,window.innerWidth/2+bubato_width/2-30,screen.height/2-40,20+10*4*width/250,-col[i],0+18*i-rotate);
       }
      }  
      context0.drawImage(bubato,window.innerWidth/2-bubato_width/2,window.innerHeight/2-bubato_height/2,bubato_width,bubato_height);
},10);
var a=1;
var time=1;
var rotate=0;
var add=1;
var width=0;
setInterval(function(){
	if(time>2){time=1;}else{time++;}
	nameElectric='col'+time+'.png';
	rotate+=add;
	if(scoll_y>0){scoll_y=0-screen.width*3081/919;}else{scoll_y+=width/240*3*a*a;}
},10);
function frameLooper(){
	window.webkitRequestAnimationFrame(frameLooper);
	fbc_array = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(fbc_array);
	for(k=1;k<=40;k++){
		   col[k]=0+(fbc_array[k])/1.5*2/1.5*Math.pow(a,0.2); 
	}
	if(fbc_array[2]>250 || fbc_array[2]>250 || fbc_array[1]>250/*&& Math.abs(fbc_array[2]-fbc_array[3])<25 */){
		if(document.getElementById("bubatofix").checked){if(checkname){nameBubato='yelowfix.png';}}a=2;add=2;}else{if(checkname){nameBubato='yelow.png';}a=1;add=0.8;}
	bubato_height=150+(fbc_array[15]-100)/2;
	bubato_width=220+(fbc_array[15]-150)/1.6;
	if(document.getElementById("vibrate").checked){
	   background_height=screen.height+100+(fbc_array[6]-100/2);
	   background_width=screen.width+100+(fbc_array[6]-100);
	}   
	width=fbc_array[2];
}
var he=0,wi=0;
