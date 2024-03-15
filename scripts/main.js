var myimage = document.querySelector('img');

myimage.onclick = function () {
	var mySrc = myimage.getAttribute('src');
	if (mySrc === 'images/chrome-web.png') {
		myimage.setAttribute('src', 'images/chrome-web2.jpg');
	} else {
		myimage.setAttribute('src', 'images/chrome-web.png');
	}
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
	var myName = prompt("Пожайлуста, введите ваше имя.");
	localStorage.setItem("name", myName);
	myHeading.textContent = "Спасибо, что выбрали Chrome, " + myName;
}
if (!localStorage.getItem("name")) {
	setUserName();
} else {
	var storedName = localStorage.getItem("name");
	myHeading.textContent = "Добро пожаловать в Chrome, " + storedName;
}
myButton.onclick = function () {
	setUserName();
};