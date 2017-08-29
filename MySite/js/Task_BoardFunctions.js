// JavaScript Document
$(document).ready(function()
{
	"use strict";
	
	var bool = true;
	var takeTaskBut = $("#take_cancelTask");
	
	takeTaskBut.click(function(){
		if(bool)
		{
			takeTaskBut.text("Cancel this task");
			bool = false;
		}
		else 
		{
			takeTaskBut.text("Take this task");
			bool = true;
		}
	});	
	
	$("#addTaskBut").click(function()
	{
		$("#modalHeader").text("Add your task");
	});
	$("#editTask").click(function(){
			$("#modalHeader").text("Edit your task");
		});
		
	$(".read_more").click(function()
	{
		
	});

	$("#saveBut").click(function(eventObject)
	{
		var titleTxt = $("#modalTitle").val();
		var bodyTxt = $("#modalBodyText").val();
		var deadLineDate = $("div input[type=date]").val();
		var deadLineTime = $("div input[type=time]").val();
		var payment = $("#money").val();
		
		if(titleTxt === "")
		{
			alert("Title is empty!");
			eventObject.preventDefault();
		} else if(bodyTxt === "")
		{
			eventObject.preventDefault();
			alert("Body is empty!");
		}  else if(deadLineTime === "")
		{
			eventObject.preventDefault();
			alert("You should change the DeadLine Time!");
		} else if(payment === "")
		{
			eventObject.preventDefault();
			alert("Payment is empty!");
		} else
		{
			$("#taskTable").append("<table class=table table-condensed><thead><tr><th class=task_title text-center colspan=5>"+ titleTxt +"</th></tr></thead><tbody><tr><td><img src=images/MediaObj_Placeholder.png alt=></td><td class=task_body colspan=4>"+ bodyTxt.substr(0,250) +"<a href=#><h5 class=text-center data-toggle=modal data-target=#task_info>Read more.</h5></a></td></tr><tr><td><strong>DeadLine:</strong></td><td class=task_deadline>"+ deadLineDate + " / " + deadLineTime + "</td><td><strong>Author:</strong></td><td class=task_author colspan=2></td></tr><tr><td><strong>Payment:</strong></td><td class=task_payment colspan=3>" + payment.substr(0,100) + "</td></tr></tbody></table>");
			titleTxt = "";
		}
	});
});
	//alert("Title "+ titleTxt + "Body " + bodyTxt + "DeadLine " + deadLine + "Payment" + payment);
/*
$(".media-object-default").append("<div class=media><div class=media-left><a href=#><img class=media-object src=images/MediaObj_Placeholder.png alt=placeholder image></a></div><div class=media-body><h4 class=media-heading>"+ titleTxt +"</h4>"+ bodyTxt +"<h4 class=media-bottom>| <strong>DeadLine:</strong> "+deadLine+" |  <strong>Payment:</strong>"+payment+" |</h4></div></div>");
*/