
function initIframe() {
	var div = document.getElementById('iframdiv');
	// here we check if div has firstChild or not 
	if (!div.firstChild) {
		div.appendChild(iframee);
	} else if (div.firstChild && div.firstChild.nodeName != 'IFRAME') {
		div.insertBefore(iframee, div.firstChild);
	}


}


var arrayStyle = {};
var iframee = document.createElement('iframe');
var style = [];
var tries = 1;
arrayStyle.type = 8;
iframee.name = 'bfiframe';
iframee.src = "widget.html";
iframee.id = 'iframe';

style[8] = {
	iframe : {
		height : 290,
		overflow : 'hidden',
		scrolling : 'no',
		width : 368
	}
};


iframee.width = style[arrayStyle.type].iframe.width;
iframee.height =style[arrayStyle.type].iframe.height;
iframee.scrolling = 'no'
iframee.frameBorder = '0';
iframee.style.borderWidth = 0;
iframee.style.display = 'block';
iframee.style.margin = '0 auto';
iframee.title = 'Customer reviews'
iframee.style.padding = '0'
iframee.style.overflow = 'hidden'


initIframe();
