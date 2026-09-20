const WINNINGCOMBO= [
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


var BOARD=[
    ['','',''],
    ['','',''],
    ['','',''],
]

function winner(){
    for(var [a,b,c] of WINNINGCOMBO){
        x1=Math.floor(a/3)
        y1=(a%3)
        x2=Math.floor(b/3)
        y2=(b%3)
        x3=Math.floor(c/3)
        y3=(c%3)
        if(BOARD[x1][y1]!='' && BOARD[x1][y1]==BOARD[x2][y2] && BOARD[x2][y2]==BOARD[x3][y3]){
            console.log(true)
            return true
        }
    }
    return false
}
var win = document.getElementById('winner')
function fillBox(event){
    if (event.currentTarget.textContent=="" && number!=-1){
        event.currentTarget.textContent=(number%2==1)?"X":"O"
        BOARD[Math.floor(event.currentTarget.id/3)][event.currentTarget.id%3] = (number%2==1)?"X":"O"
        number++
        if(winner()){ 
            win.textContent = (number%2==0)?"Player X Winner":"Player O Winner"
            number=-1
        }
        else if(number==10){
            win.textContent = "Draw"
        }
    }
}
document.getElementById("reset").addEventListener("click",reset)
game_boxes = document.querySelectorAll('.game_box')
function reset(){
    number=1
    win.textContent = ""
    BOARD=[
        ['','',''],
        ['','',''],
        ['','',''],
    ]
    game_boxes.forEach(element=>{
        element.innerHTML=""
    })
}

number = 1
game_boxes.forEach(element => {
    console.log('test')
    element.addEventListener("click",fillBox)
});