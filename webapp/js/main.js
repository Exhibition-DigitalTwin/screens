
document.querySelector('#loop_1').addEventListener('ended', function () {
    this.play();
})
document.querySelector('#loop_2').addEventListener('ended', function () {
    this.play();
})

function changeToSourceTwo() {
    document.getElementById('loop_1').addEventListener('ended', myHandler, false);
    var vid = document.getElementById('transition')
    function myHandler(e) {
        document.getElementById("transition").style.display = "block";
        document.getElementById("loop_1").style.display = "none";
        vid.play();
    };
}

document.getElementById('transition').addEventListener('ended', myHandler, false);
function myHandler(e) {
    document.getElementById("transition").style.display = "none";
    document.getElementById("loop_2").style.display = "block";
};