

var current_slide = 0;

onload = function() {
	$("div.slide").hide();
	$(".caption").hide();
	$( document.getElementsByName(current_slide.toString()) ).show();
	$( document.getElementsByName("c"+current_slide.toString()) ).show();
	setInterval(function(){show_next()},5000);
	//setCaptionBackground();
}


function show_slide(slide, direction)
{
	$( document.getElementsByName("c"+slide.toString()) ).show();
	$( document.getElementsByName(slide.toString()) ).show("slide", { direction: direction }, 1000);
}

function hide_slide(slide, direction)
{
	$( document.getElementsByName("c"+slide.toString()) ).hide();	
	$( document.getElementsByName(slide.toString()) ).hide("slide", { direction: direction }, 1000);
}

function show_next()
{
	//setCaptionBackground();
	hide_slide(current_slide,"rigth");
	current_slide ++;
	if (current_slide > $("div.slide").length-1)
	{
		current_slide = 0;
	}
	show_slide(current_slide,"left");
}

function show_previous()
{
	//setCaptionBackground();
	hide_slide(current_slide, "left");
	current_slide --;
	if (current_slide < 0)
	{
		current_slide = $("div.slide").length-1;
	}
	show_slide(current_slide, "right");
}