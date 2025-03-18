var gBallSize = 100
function onBallClick() {
    var elBall = document.querySelector('.ball')


    if (gBallSize < 400) {
        gBallSize += 50
    } else {
        gBallSize = 100
    }

    elBall.style.height = gBallSize + 'px'
    elBall.style.width = gBallSize + 'px'
}



