var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 50,
});

var clearButton = document.getElementById('discord');
clearButton.onclick = discord_function;

function discord_function(){
	window.open("https://discordapp.com/users/188911626479599626/", "_blank",)
}

var clearButton = document.getElementById('mail');
clearButton.onclick = mail_function;

function mail_function(){
	window.open("mailto:erwann.dev@gmail.com", "_blank",)
}