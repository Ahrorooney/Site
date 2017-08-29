// JavaScript Document
$(document).ready(function()
{
	"use strict";
	
	var current_element;
	
	$("input:text").click(function()
	{
		current_element = $(this);
	});
	
	$(".fa-align-center").click(function() 
	{
        current_element.css('text-align','center');
    });
	
	$(".fa-align-justify").click(function() 
	{
        current_element.css('text-align','justify');
    });
	
	$(".fa-align-left").click(function() 
	{
        current_element.css('text-align','left');
    });
	
	$(".fa-align-right").click(function() 
	{
        current_element.css('text-align','right');
    });
	
	$("#colorSelector").ColorPicker(
	{
		color: '#0000ff',
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex) {
			$("#div_color").css("backgroundColor", "#" + hex);
		}
	});
	
	var team_card = 0;
	
	$("#jumbotron_card").click(function()
	{
		team_card = 1;
		$("#example_container").html("<div class=jumbotron><form><h1><input type=text id=card_title placeholder=Hello world!!!></h1><p><textarea id=card_body cols=70 rows=3 placeholder='This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'></textarea></p><p><input type=text id=card_end placeholder=Good buy!!!></p></form></div>");
	});
	
	$("#carousel_card").click(function()
	{
		team_card = 2;
	});
	
	$("#upload_file").click(function()
	{
		team_card = 3;
	});
});