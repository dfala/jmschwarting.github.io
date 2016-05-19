function isIt5 () {
	var now = new Date();
	var time = now.getHours();

	if (time < 17) {
		document.getElementById("isIt5Button").style.display = "none";
		document.getElementById("notYet").style.display = "block";
		document.body.style.background = "url('https://images.unsplash.com/photo-1453227588063-bb302b62f50b?crop=entropy&dpr=2&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1450')";
		console.log("not yet")
	} else {
		document.getElementById("isIt5Button").style.display = "none";
		document.getElementById("yes").style.display = "block";
		document.body.style.background = "url('https://www.fest300.com/system/images/W1siZiIsIjIwMTQvMDQvMTgvMDUvMTcvMjkvNTg1L0hFUk9fSUJJWkFfQ0xPU0lOR19QQVJUSUVTX1ByaXZpbGVnZS5qcGciXSxbInAiLCJ0aHVtYiIsIjE2MDB4OTAwIyJdXQ/HERO_IBIZA_CLOSING_PARTIES_Privilege.jpg') no-repeat scroll";
		console.log("It is!!!")
	}
}


function reset () {
	document.getElementById("yes").style.display = "none";
	document.getElementById("notYet").style.display = "none";
	document.getElementById("isIt5Button").style.display = "block";
	document.body.style.background = "url('')";
}