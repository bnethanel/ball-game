var gBallSize = 100
function onBallClick() {
    var elBall = document.querySelector('.ball')
    gBallSize += 50
    elBall.style.height = gBallSize + 'px'
    elBall.style.width = gBallSize + 'px'
}



