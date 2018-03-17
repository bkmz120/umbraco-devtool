//add inject.js to top <head> of the page
var s = document.createElement('script');
s.src = chrome.extension.getURL('/dist/js/inject.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
