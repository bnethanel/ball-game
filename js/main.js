var gBallSize = 100
function onBallClick(elBall, maxDiameter) {
    gBallSize += getRandomIntInclusive(20, 60)
    elBall.style.backgroundColor = getRandomColor()

    if (gBallSize > maxDiameter) {
        gBallSize = 100
    }

    elBall.style.height = gBallSize + 'px'
    elBall.style.width = gBallSize + 'px'
    elBall.innerHTML = gBallSize
}



