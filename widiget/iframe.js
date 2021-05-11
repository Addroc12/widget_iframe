
function initIframe() {
	var div = document.getElementById('iframdiv');
	console.log(div)
	div.appendChild(iframee);
}

var _bfcfg = {};
var iframee = document.createElement('iframe');
var style = [];
var tries = 1;

iframee.name = 'bfiframe';
iframee.src = "widget.html";
iframee.id = 'iframe';


iframee.width = '310'
iframee.height ='270'
iframee.scrolling = 'no'
iframee.frameBorder = '0';
iframee.style.borderWidth = 0;
iframee.style.display = 'block';
iframee.style.margin = '0 auto';
iframee.title = 'Customer reviews'
iframee.style.padding = '0'
iframee.style.overflow = 'hidden'


initIframe();
