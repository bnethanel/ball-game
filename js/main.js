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

function onBall3Click() {
    var elball1 = document.querySelector('.ball1')
    var elball2 = document.querySelector('.ball2')

    var ball1Color = window.getComputedStyle(elball1).backgroundColor
    var ball2Color = window.getComputedStyle(elball2).backgroundColor

    elball1.style.backgroundColor = ball2Color
    elball2.style.backgroundColor = ball1Color

}

function onBall4Click() {
    var elBall1 = document.querySelector('.ball1')
    var elBall2 = document.querySelector('.ball2')

    var decreaseAmount = getRandomIntInclusive(20, 60)

    updateBallSize(elBall1, decreaseAmount)
    updateBallSize(elBall2, decreaseAmount)
}

function updateBallSize(elBall, decreaseAmount) {
    var currSize = parseInt(window.getComputedStyle(elBall).width)
    var newSize

    var newSize = Math.max(currSize - decreaseAmount, 100)

    elBall.style.width = newSize + 'px'
    elBall.style.height = newSize + 'px'

    elBall.innerHTML = newSize

}


