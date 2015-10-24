var ppPoint = function(x, y)
{
	this.x = x;
	this.y = y;
}
var ppPointArray = new Array();
var ppMousePressed;
var context = document.getElementById('myCanvas').getContext("2d");


function ppDrawLine(curX, curY)
{
	context.beginPath();
	var ppLastPoint = ppPointArray[ppPointArray.length - 1];
	context.moveTo(ppLastPoint.x, ppLastPoint.y);
	context.lineTo(curX, curY);
	context.closePath();
	context.stroke();
	ppPointArray.push(new ppPoint(curX, curY));
}

function ppCanvasInit()
{
	context.strokeStyle = "red";
	context.lineJoin = "round";
	context.lineWidth = 1;
}


$('#myCanvas').mouseleave(function(e){
	if(ppMousePressed)
	{
		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;
		ppDrawLine(mouseX, mouseY);
	}
});

$('#myCanvas').mouseenter(function(e){
	var mouseX = e.pageX - this.offsetLeft;
	var mouseY = e.pageY - this.offsetTop;
	ppPointArray.push(new ppPoint(mouseX, mouseY));
});




$(window).mouseup(function(e){
	ppMousePressed = false;
});

$('#myCanvas').mousedown(function(e)
{
	if(e.which == 1)
	{
		ppMousePressed = true;
		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;
		ppPointArray.push(new ppPoint(mouseX, mouseY));
	}
});


$('#myCanvas').mousemove(function(e)
{
	if(ppMousePressed)
	{
		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;
		ppDrawLine(mouseX, mouseY);
	}
});


 

ppCanvasInit();
