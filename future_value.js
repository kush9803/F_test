"use strict";
var $ = function (id) {
    return document.getElementById(id);
}
var calculateFV = function(investment, rate, years) {
	var futureValue = investment;
	var months = years * 12;
    for (var i = 1; i <= months; i++ )
		{
		futureValue = futureValue + (futureValue * rate / 100);
    }
	futureValue = futureValue + investment;
    futureValue = futureValue.toFixed(2);
	return futureValue;
}
var processEntries = function() {
    var investment = parseFloat( $("investment").value );
    var rate = parseFloat( $("annual_rate").value );
    var years = parseInt( $("years").value );
	
	if(isNaN(investment) || isNaN(rate) || isNaN(years))
	{
		if (isNaN(investment)) {
			$("investment").nextElementSibling.firstChild.nodeValue= "Enter a valid value in investment field";
		}
		if(isNaN(rate))
		{
			$("annual_rate").nextElementSibling.firstChild.nodeValue= "Enter a valid value in rate field";
		} 
		if(isNaN(years))
		{
			$("years").nextElementSibling.firstChild.nodeValue= "Enter a valid value in years field";
		}
	}	
	else 
	{
		var isValid=true;
		if(investment < 100 || investment > 100000){
			$("investment").nextElementSibling.firstChild.nodeValue= "Must be an integer from 100 - 100,000";
			isValid=false;
			$("future_value").value = "";
		}
		if(rate < 0.1 || rate > 12)
		{
			$("annual_rate").nextElementSibling.firstChild.nodeValue = "Must be a value from .1 - 12";
			isValid=false;
			$("future_value").value = "";
		}
		if(years<1 || years>50)
		{
			$("years").nextElementSibling.firstChild.nodeValue = "Must be an integer from 1 - 50";
			isValid=false;
			$("future_value").value = "";
		}
	
		if(isValid)
		{
					
			$("investment").nextElementSibling.firstChild.nodeValue="";
			$("annual_rate").nextElementSibling.firstChild.nodeValue= "";
			$("years").nextElementSibling.firstChild.nodeValue="";
			$("future_value").value	= calculateFV(investment, rate, years);
		}
	}			
}


window.onload = function () {
    $("calculate").onclick = processEntries;
	
$("annual_rate").ondblclick = function () {
	$("annual_rate").value="";
}	
    $("investment").focus();
}
