
document.getElementById("movingImage").addEventListener("click", function() {
    var img = this;
    var fadeEffect = setInterval(function () {
        if (!img.style.opacity) {
            img.style.opacity = 1;
        }
        if (img.style.opacity > 0) {
            img.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            img.style.display = 'none';
        }
    }, 100);
});
