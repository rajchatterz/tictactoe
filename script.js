console.log("Welcome to my tic tac toe app")
const gameover = new Audio("./music/gameover.mp3")
const musicplay = new Audio("./music/music.mp3")
const ting = new Audio("./music/ting.mp3")
let turn = "X"
let isgameover=false

const checkWin=()=>{
    let boxtext = document.getElementsByClassName("boxtext")
    let win = [
        [0,1,2,220,-140,90],
        [3,4,5,220,0,90],
        [6,7,8,220,140,90],
        [0,3,6,79,0,0],
        [1,4,7,231,0,0],
        [2,5,8,375,0,0],
        [0,4,8,239,0,135],
        [2,4,6,222,0,45]
    ]
    win.forEach(e=>{
       if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && boxtext[e[0]].innerText!==""){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText+ " Won"
        musicplay.play()
        isgameover=true
        document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width="250px"
        document.querySelector('.line').style.transform=`translate(${e[3]}px,${e[4]}px) rotate(${e[5]}deg)`
        document.querySelector('.line').style.width="4px"
        document.querySelector('.line').style.transition= "width 2s ease-in-out"
       }
    })
}
checkWin()
const checkturn=()=>{
    return turn ==="X"?"0":"X"
}


// game logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(e=>{
    let boxText = e.querySelector(".boxtext")
    e.addEventListener("click",()=>{
        if(boxText.innerHTML=" "){
            boxText.innerHTML=turn
            ting.play()
            turn = checkturn()
            checkWin()
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn
            }
           
        }

    })
})
reset.addEventListener("click",()=>{
    let boxes = document.querySelectorAll(".boxtext")
    Array.from(boxes).forEach(e=>{
        e.innerText=" "
    })
    turn="X"
    gameover.play()
    musicplay.pause()
    musicplay.currentTime=0
    isgameover=false
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn
    document.querySelector('.line').style.width="0px"
    document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width="0px"
})

