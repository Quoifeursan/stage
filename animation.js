function startAnimation() {
    var overlay = document.createElement("div");
    overlay.id = "overlay1";
    document.body.appendChild(overlay);

    var audio = document.getElementById("backgroundAudio");
    audio.play();

    setTimeout(function() {
        overlay.style.opacity = 1;
    }, 10);
}
