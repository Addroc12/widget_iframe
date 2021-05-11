(function () {
    var a = document.createElement('script');
     a.type = 'text/javascript'; 
     a.async = true; 
     a.src = 'iframe.js';
    var b = document.getElementsByTagName('script')[0]; 
    b.parentNode.insertBefore(a, b);
    console.log(b)
})();