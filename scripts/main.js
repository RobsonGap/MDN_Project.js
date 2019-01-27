var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}