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

function ppPick()
{
	ppMode = "pick";
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

function ppBlur()
{
	ppImgData = context.getImageData(0, 0, ppCanvasWidth, ppCanvasHeight);
	
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
	var fileName = ppFile.value.substring(ppFile.value.lastIndexOf('\\') + 1);
	image.src = "foo.jpg";
	image.crossOrgin = "Anonymous";

	image.onload = function()
	{
		context.drawImage(image, 0, 0);
	}
}


function ppInvert()
{
	var ppImgData = context.getImageData(0, 0, ppCanvasWidth, ppCanvasHeight);
	var ppData = ppImgData.data;
	for(var i = 0; i < ppData.length; i += 4)
	{
		ppData[i] = 0xFF - ppData[i];
		ppData[i + 1] = 0xFF - ppData[i + 1];
		ppData[i + 2] = 0xFF - ppData[i + 2];
	}
	context.putImageData(ppImgData, 0, 0);	
}


function ppBlur()
{
	var ppImgData = context.getImageData(0, 0, ppCanvasWidth, ppCanvasHeight);
	var ppData = ppImgData.data;
	var ppTemp = ppData;
	var radius = 3;
	var length = ppData.length; 
	for(var i = 0; i < ppCanvasHeight; i++)
	{
		for(var j = 0; j < ppCanvasWidth; j++)
		{
			var x = (i * ppCanvasWidth + j) * 4;
			var ppB = 0, ppR = 0, ppG = 0, cnt = 0;
			for(var m = i - radius; m < i + radius; m++)
			{
				if (m < 0 || m > ppCanvasHeight)continue;
				for(var n = j - radius; n < j + radius; n++)
				{
					cnt++;
					if (n < 0 || n > ppCanvasWidth)continue;
					var xx = (m * ppCanvasWidth + n) * 4;
					ppR += ppData[xx];
					ppG += ppData[xx + 1];
					ppB += ppData[xx + 2];
				}
			}
			ppTemp[x] = ppR / cnt;
			ppTemp[x + 1] = ppG / cnt;
			ppTemp[x + 2] = ppB / cnt;
		}
	}
	ppData = ppTemp;
	context.putImageData(ppImgData, 0, 0);	
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
		if(ppMode == "pick")
		{
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
