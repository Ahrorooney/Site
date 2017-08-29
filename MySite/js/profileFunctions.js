// JavaScript Document
$(document).ready(function()
{
	"use strict";
	
	if($("#teamInfo").html() === "No Team")
	{
		$("#find_leave_Team").text("Find team");
	} else 
	{
		$("#find_leave_Team").text("Leave team");
	}
	
	$("#input_First_Name").attr("value",$("#first_name").text());
	$("#input_Second_Name").attr("value",$("#second_name").text());
	$("#input_Email").attr("value",$("#email").text());
	$("#input_Phone_Number").attr("value",$("#phone_number").text());
	$("#input_Study_place").attr("value",$("#place_of_study").text());
	$("#input_work_place").attr("value",$("#place_of_work").text());
	$("#input_Graduation_Date").attr("value",$("#date").text());
	$("#input_Occupation").attr("value",$("#occupation").text());
	$("#input_skills").text($("#skills").text());
	$("#input_bio").text($("#bio").text());
}); // End of $(document).ready(function()