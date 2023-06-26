const bigSquare = document.getElementById("bigSquare");
const smallSquare1 = document.getElementById("smallSquare1");
const smallSquare2 = document.getElementById("smallSquare2");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

let animationId;
let isAnimating = false;

function moveSquares(){
    const bigSquareWidth = bigSquare.offsetWidth;
    const bigSquareHeight = bigSquare.offsetHeight;
    const smallSquareSize = smallSquare1.offsetWidth;

    const maxLeft=bigSquareWidth - smallSquareSize;
    const maxTop=bigSquareHeight - smallSquareSize;

    const left1 = Math.floor(Math.random() * maxLeft);
    const top1 = Math.floor(Math.random() * maxTop);
    const left2 = Math.floor(Math.random() * maxLeft);
    const top2 = Math.floor(Math.random() * maxTop);

    smallSquare1.style.left = `${left1}px`;
    smallSquare1.style.left = `${top1}px`;
    smallSquare2.style.left = `${left2}px`;
    smallSquare2.style.left = `${top2}px`;

    if(isAnimating){
        animationId = requestAnimationFrame(moveSquares);
    }
}

startButton.addEventListener("click", function(){
    if(!isAnimating){
        isAnimating = true;
        moveSquares();
    }
});

stopButton.addEventListener("click",function(){
    if(isAnimating){
        isAnimating = false;
        cancelAnimationFrame(animationId);
    }
});
