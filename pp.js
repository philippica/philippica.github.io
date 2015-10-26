var ppMode = "paint";
var ppPoint = function(x, y)
{
	this.x = x;
	this.y = y;
}
var ppLastPoint;
var ppInitialPoint;
var ppMousePressed;
var context = document.getElementById('myCanvas').getContext("2d");
var ppCanvasWidth = $('#myCanvas').width();
var ppCanvasHeight = $('#myCanvas').height();
var ppImgData;
function test()
{
	var ppImgData = context.getImageData(0, 0, ppCanvasWidth, ppCanvasHeight);
	//context.clearRect(0, 0, ppCanvasWidth, ppCanvasHeight);
	context.putImageData(ppImgData, 100, 0);
}


function ppSetModeDrag()
{
	ppMode = "drag";
}
function ppSetModePaint()
{
	ppMode = "paint";
}
function ppDrawLine(curX, curY)
{
	context.beginPath();
	context.moveTo(ppLastPoint.x, ppLastPoint.y);
	context.lineTo(curX, curY);
	context.closePath();
	context.stroke();
	ppLastPoint = new ppPoint(curX, curY);
}

function ppCanvasInit()
{
	context.strokeStyle = "red";
	context.lineJoin = "round";
	context.lineWidth = 5;
}


function ppDrag(curX, curY)
{
	var dX = curX - ppInitialPoint.x;
	var dY = curY - ppInitialPoint.y;
	console.info(dX+" "+dY);
	context.putImageData(ppImgData, dX, dY);
}

function ppOpenFile(ppFile)
{
	var image = new Image();
	image.src = "1-1401261H42XJ.jpg";
	image.onload = function()
	{
		context.drawImage(image, 0, 0);
	}
	alert(ppFile.value);
}











$('#myCanvas').mouseleave(function(e)
{
	if(ppMode == "paint")
	{
		if(ppMousePressed)
		{
			var mouseX = e.pageX - this.offsetLeft;
			var mouseY = e.pageY - this.offsetTop;
			ppDrawLine(mouseX, mouseY);
		}
	}
});

$('#myCanvas').mouseenter(function(e)
{
	if(ppMode == "paint")
	{
		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;
		ppLastPoint = new ppPoint(mouseX, mouseY);
	}
});




$(window).mouseup(function(e){

	ppMousePressed = false;
});

$('#myCanvas').mousedown(function(e)
{
	if(e.which == 1)
	{
		ppMousePressed = true;
		if(ppMode == "paint")
		{
			var mouseX = e.pageX - this.offsetLeft;
			var mouseY = e.pageY - this.offsetTop;
			ppLastPoint = new ppPoint(mouseX, mouseY);
		}
		if(ppMode == "drag")
		{
			ppImgData = context.getImageData(0, 0, ppCanvasWidth, ppCanvasHeight);
			var mouseX = e.pageX - this.offsetLeft;
			var mouseY = e.pageY - this.offsetTop;
			ppInitialPoint = new ppPoint(mouseX, mouseY);
		}
	}
});




$('#myCanvas').mousemove(function(e)
{
	if(ppMousePressed)
	{
		if(ppMode == "paint")
		{
			var mouseX = e.pageX - this.offsetLeft;
			var mouseY = e.pageY - this.offsetTop;
			ppDrawLine(mouseX, mouseY);
		}
		if(ppMode == "drag")
		{
			var mouseX = e.pageX - this.offsetLeft;
			var mouseY = e.pageY - this.offsetTop;
			context.clearRect(0, 0, ppCanvasWidth, ppCanvasHeight);
			ppDrag(mouseX, mouseY);
		}
	}
});


 

ppCanvasInit();
