chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
var tab = tabs[0];
console.log(tab.url);
var myurl = tab.url;

document.getElementById('superid').value = myurl;

var myArray = ["#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f39c12", "#d35400", "#c0392b", "#7f8c8d", "#1F3A93", "#22313F", "#000000"];  
var rand = myArray[Math.floor(Math.random() * myArray.length)];

var qrcode = new QRCode(document.getElementById("myIfrm"), {
	width : 300,
	height : 300,
    colorDark : rand,
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
function makeCode() {		
	var elText = document.getElementById("superid");
	//alert(elText);
	if (!elText.value) {
		alert("Input a text");
		elText.focus();
		return;
	}	
	qrcode.makeCode(elText.value);
}
makeCode();



});
