// Last update time: Oct.31 2015 
var ppLogo = "data:image/jpeg;base64,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"

var sumR = new Array();
var sumG = new Array();
var sumB = new Array();
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

function ppCommom()
{
	$('#apd').remove();
}

function ppDoDrag()
{
	$('#myCanvas').unbind();
	$('#myCanvas').mousemove(function(e)
	{
		if(ppMousePressed)
		{
			var mouseX = e.pageX - this.offsetLeft;
			var mouseY = e.pageY - this.offsetTop;
			context.clearRect(0, 0, ppCanvasWidth, ppCanvasHeight);
			ppDrag(mouseX, mouseY);
		}
	});
	$('#myCanvas').mousedown(function(e)
	{
		if(e.which == 1)
		{
			ppMousePressed = true;
			ppImgData = context.getImageData(0, 0, ppCanvasWidth, ppCanvasHeight);
			var mouseX = e.pageX - this.offsetLeft;
			var mouseY = e.pageY - this.offsetTop;
			ppInitialPoint = new ppPoint(mouseX, mouseY);
		}
	});
	$(window).mouseup(function(e){
		ppMousePressed = false;
	});
}
function reverse(x)
{
	var ret = "";
	var len = x.length;
	for(var i = len - 1; i >= 0; i--)
	{
		ret += x[i];
	}
	return ret;
}
function Hex(x)
{
	var num = new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');
	var ret = "";
	while(x)
	{
		ret += num[x % 16];
		x = parseInt(x / 16);
	}
	if(ret.length == 0)ret += "00";
	if(ret.length == 1)ret += "0";
	return reverse(ret);
}





function rgb(r, g, b)
{
	return "#" + Hex(r).concat(Hex(g).concat(Hex(b)));
}
rgb(255,255,255);


function ppDoPick()
{
	var pick = true;
	ppImgData = context.getImageData(0, 0, ppCanvasWidth, ppCanvasHeight);
	$('#myCanvas').unbind();
	$('#myCanvas').click(function(e)
	{
		pick = !pick;
	});
	$('#myCanvas').mousemove(function(e)
	{
		if(pick)
		{
			var mouseX = e.pageX - this.offsetLeft;
			var mouseY = e.pageY - this.offsetTop;
			var R = ppImgData.data[(mouseY * ppCanvasWidth + mouseX) * 4];
			var G = ppImgData.data[(mouseY * ppCanvasWidth + mouseX) * 4 + 1];
			var B = ppImgData.data[(mouseY * ppCanvasWidth + mouseX) * 4 + 2];
			console.info(rgb(R, G, B));
			$('#colo').html('rgb ' + rgb(R, G, B));
			$('#colo').css("background-color",rgb(R, G, B));
		}
	});
}


function ppDoPaint()
{
	$('#myCanvas').unbind();
	$('#myCanvas').mousemove(function(e)
	{
		if(ppMousePressed)
		{
			var mouseX = e.pageX - this.offsetLeft;
			var mouseY = e.pageY - this.offsetTop;
			ppDrawLine(mouseX, mouseY);
		}
	});
	$('#myCanvas').mousedown(function(e)
	{
		if(e.which == 1)
		{
			ppMousePressed = true;
			var mouseX = e.pageX - this.offsetLeft;
			var mouseY = e.pageY - this.offsetTop;
			ppLastPoint = new ppPoint(mouseX, mouseY);
		}
	});
	$('#myCanvas').mouseenter(function(e)
	{

		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;
		ppLastPoint = new ppPoint(mouseX, mouseY);
	});
	$('#myCanvas').mouseleave(function(e)
	{
		if(ppMousePressed)
		{
			var mouseX = e.pageX - this.offsetLeft;
			var mouseY = e.pageY - this.offsetTop;
			ppDrawLine(mouseX, mouseY);
		}
	});
	$(window).mouseup(function(e){
		ppMousePressed = false;
	});
}


function ppDoBlur()
{
	var ppImgData = context.getImageData(0, 0, ppCanvasWidth, ppCanvasHeight);
	var ppData = ppImgData.data;
	var ppTemp = ppData;
	var radius = 0;
	var length = ppData.length; 
	$('#range').attr("value", 0);
	for(var i = 0; i < ppCanvasHeight; i++)
	{
		for(var j = 0; j < ppCanvasWidth; j++)
		{
			var position = i * ppCanvasWidth + j;
			var x = (position) * 4;
			sumR[position] = ppData[x];
			sumG[position] = ppData[x + 1];
			sumB[position] = ppData[x + 2];
			if(i != 0)
			{
				sumR[position] += sumR[position - ppCanvasWidth];
				sumG[position] += sumG[position - ppCanvasWidth];
				sumB[position] += sumB[position - ppCanvasWidth];
			}
			if(j != 0)
			{
				sumR[position] += sumR[position - 1];
				sumG[position] += sumG[position - 1];
				sumB[position] += sumB[position - 1];
			}
			if(i != 0 && j != 0)
			{
				sumR[position] -= sumR[position - ppCanvasWidth - 1];
				sumG[position] -= sumG[position - ppCanvasWidth - 1];
				sumB[position] -= sumB[position - ppCanvasWidth - 1];
			}
		}
	}

	function ppBlur()
	{
		var area = (radius + radius + 1) * (radius + radius + 1);
		for(var i = 0; i < ppCanvasHeight; i++)
		{
			for(var j = 0; j < ppCanvasWidth; j++)
			{
				var position = i * ppCanvasWidth + j;
				var x = (position) * 4;
				var tt = (i + radius) * ppCanvasWidth + j + radius;
				var tt2 = (i - radius - 1) * ppCanvasWidth + j + radius;
				var tt3 = (i + radius) * ppCanvasWidth + j - radius - 1;
				var tt4 = (i - radius - 1) * ppCanvasWidth + j - radius - 1;
				ppTemp[x] = (sumR[tt] - sumR[tt2] - sumR[tt3] + sumR[tt4]) / area;
				ppTemp[x + 1] = (sumG[tt] - sumG[tt2] - sumG[tt3] + sumG[tt4]) / area;
				ppTemp[x + 2] = (sumB[tt] - sumB[tt2] - sumB[tt3] + sumB[tt4]) / area;			
			}
		}
		ppData = ppTemp;
		context.putImageData(ppImgData, 0, 0);
	}

	$('#range').unbind();
	$('#range').change(function()
	{
		radius = parseInt($('#range').val());
		ppBlur();
	});
}

$('#color').change(function()
{
	var co = $('#color').val();
	context.strokeStyle = co;
	$('#colo').html('rgb ' + co);
	$('#colo').css("background-color", co);
});



function ppDoFill()
{
	var dx = new Array(0, 0, -1, 1, -1, -1, 1, 1);
	var dy = new Array(1, -1, 0, 0, -1, 1, -1, 1);
	var threshold = 0;
	$('#range').attr("value", 0);
	$('#range').unbind();
	$('#range').change(function()
	{
		threshold = parseInt($('#range').val()) * 4;
	});


	$('#myCanvas').unbind();
	$('#myCanvas').click(function(e)
	{
		var ppImgData = context.getImageData(0, 0, ppCanvasWidth, ppCanvasHeight);
		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;
		var fillR = 0;
		var fillG = 255;
		var fillB = 255;
		var R = ppImgData.data[(mouseY * ppCanvasWidth + mouseX) * 4];
		var G = ppImgData.data[(mouseY * ppCanvasWidth + mouseX) * 4 + 1];
		var B = ppImgData.data[(mouseY * ppCanvasWidth + mouseX) * 4 + 2];
		var ppQueue = new Array();
		var ppVisit = new Array();
		var ppField = dx.length;
		ppQueue.push(new ppPoint(mouseX, mouseY));
		while(ppQueue.length != 0)
		{
			var u = ppQueue.shift();
			for(var i = 0; i < ppField; i++)
			{
				var X = u.x + dx[i];
				var Y = u.y + dy[i];
				if(X < 0 || Y < 0 || X > ppCanvasWidth || Y > ppCanvasHeight || ppVisit[Y * ppCanvasWidth + X])continue;
				ppVisit[Y * ppCanvasWidth + X] = true;
				if(Math.abs(ppImgData.data[(Y * ppCanvasWidth + X) * 4] - R) > threshold)continue;
				if(Math.abs(ppImgData.data[(Y * ppCanvasWidth + X) * 4 + 1] - G) > threshold)continue;
				if(Math.abs(ppImgData.data[(Y * ppCanvasWidth + X) * 4 + 2] - B) > threshold)continue;
				ppImgData.data[(Y * ppCanvasWidth + X) * 4] = fillR;
				ppImgData.data[(Y * ppCanvasWidth + X) * 4 + 1] = fillG;
				ppImgData.data[(Y * ppCanvasWidth + X) * 4 + 2] = fillB;
				ppQueue.push(new ppPoint(X, Y));
			}
		}
		context.putImageData(ppImgData, 0, 0);
	});
}

function ppDoT()
{
	$('#myCanvas').unbind();
	$('#myCanvas').click(function(e)
	{
		var x = e.pageX;
		var y = e.pageY;
		var mouseX = x - this.offsetLeft;
		var mouseY = y - this.offsetTop;
		$('#apd').remove();
		var strTemp = '<textarea id="apd" rows=1 onchange="ppPutStrOnCanvas(';
		strTemp += mouseX + ','+mouseY+')" style="background:transparent;position:absolute;color:white;left:';
		strTemp += x+'px;top:'+y+'px;"></textarea>';
		$('#stage').append(strTemp);
	});
}
function ppPutStrOnCanvas(X, Y)
{
	context.fillStyle = "white";
	context.fillText($('#apd').val(), X, Y);
	console.info("success");
}

function ppFill()
{
	ppCommom();
	ppMode = "fill";
	ppDoFill();
}


function ppPick()
{
	ppCommom();
	ppMode = "pick";
	ppDoPick();
}


function ppSetModeDrag()
{
	ppCommom();
	ppMode = "drag";
	ppDoDrag();
}
function ppSetModePaint()
{
	ppCommom();
	ppMode = "paint";
	ppDoPaint();
}

function ppSetModeBlur()
{
	ppCommom();
	ppMode = "blur";
	ppDoBlur();
}

function ppSetModeT()
{
	ppCommom();
	ppMode = "T";
	ppDoT();
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
	$('#myCanvas').css("background-image", "url("+ ppLogo +")");
	$('#myCanvas').css("background-repeat", "no-repeat");
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









 

ppCanvasInit();
