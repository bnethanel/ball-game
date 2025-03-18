var gBallSize = 100
function onBallClick() {
    var elBall = document.querySelector('.ball')
    gBallSize += getRandomIntInclusive(20, 60)
    elBall.style.backgroundColor = getRandomColor()

    if (gBallSize > 400) {
        gBallSize = 100
    }

    elBall.style.height = gBallSize + 'px'
    elBall.style.width = gBallSize + 'px'
    elBall.innerHTML = gBallSize
}



