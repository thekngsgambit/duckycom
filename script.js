const imgs = document.getElementsByTagName("img");

for (let i = 0; i < imgs.length - 1; i++) {
	imgs[i].addEventListener("click", function() {
		window.open(imgs[i].src, '_blank').focus();
	});
}