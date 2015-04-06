$(document).ready(function(){	

var $canvas = $('#canvas');
var $canvas2 = $('#canvas2');
var $canvas3 = $('#canvas3');

var ctx = $canvas[0].getContext('2d');
var ctx2 = $canvas2[0].getContext('2d');
var ctx3 = $canvas3[0].getContext('2d');

var w = $canvas[0].width;
var h = $canvas[0].height;

var img = new Image();

var newTime,oldTime = 0;
var timeFac;


var c1 = new cog(0);
var c2 = new cog(40);
var c3 = new cog(80);


var cogs = [];
cogs.push(c1);
cogs.push(c2);
cogs.push(c3);


$(img).bind('load',null, function() {  ctx3.drawImage(img, 0,0,2000, 2000); loop(); });
	img.src = 'img/interstellar.jpg';


function cog(c) {
	var opacity,
		cy = (Math.random()*1000)>>0,
		cx = (Math.random()*1000)>>0;
	this.c = c;
	this.move = function(timeFac) {
		c = this.c + 0.3 * timeFac;
		opacity = (Math.sin(c*0.05)*0.5);
		if(opacity <0) {
			c = opacity = 0;
			cy = (Math.random()*1000)>>0;
			cx = (Math.random()*1000)>>0;
		}
		this.c = c;
		ctx.globalAlpha = opacity;
	ctx.drawImage($canvas3[0], cx+c, cy+c, 1000-(c*2),1000-(c*2), 0,0, w, h);
	};
};

function loop(){
	var opacity,
		cy = (Math.random()*1000)>>0,
		cx = (Math.random()*1000)>>0;
	newTime = new Date().getTime();
	if(oldTime === 0 ) {
		oldTime=newTime;
	}
	timeFac = (newTime-oldTime) * 0.1;
	if(timeFac>3) {
		timeFac=3;
	}
	cogs.sort();
	oldTime = newTime;
	for(var i=0;i<cogs.length;i++){
		cogs[i].move(timeFac);							

	}					
	ctx2.drawImage( $canvas[0] ,0,0, 2000, 2000);
	ctx2.fillStyle = "rgba(0, 0, 50, 0.4)";
	ctx2.fillRect(0, 0, 2000, 2000);
	setTimeout(loop, 80 );				
}
});


