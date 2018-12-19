
document.querySelector('video').addEventListener('ended', function () {
    this.play();
})

function changeToSourceTwo() {
    document.getElementById('loop').addEventListener('ended', myHandler, false);
    function myHandler(e) {
        document.getElementById("transition").style.display = "block";
        document.getElementById("loop").style.display = "none";
    };
}