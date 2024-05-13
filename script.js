
document.getElementById("movingImage").addEventListener("click", function() {
    var firstImg = this;
    var secondContent = document.getElementById("hiddenContent");
    
    var fadeOut = setInterval(function() {
        if (!firstImg.style.opacity) {
            firstImg.style.opacity = 1;
        }
        if (firstImg.style.opacity > 0) {
            firstImg.style.opacity -= 0.05;
        } else {
            clearInterval(fadeOut);
            firstImg.style.display = 'none';
            
        
            var fadeIn = setInterval(function() {
                if (secondContent.style.opacity < 1) {
                    secondContent.style.opacity = parseFloat(secondContent.style.opacity || 0) + 0.05;
                } else {
                    clearInterval(fadeIn);
                }
            }, 50);
        }
    }, 50);
});
