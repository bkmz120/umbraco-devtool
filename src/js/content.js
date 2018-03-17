//add XHRPatch.js to top <head> of the page
var s = document.createElement('script');
s.src = chrome.extension.getURL('/dist/js/XHRPatch.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
