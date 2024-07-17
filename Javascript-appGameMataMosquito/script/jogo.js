let height
let width

let positionX
let positionY

let life = 1

let time = 90

//Elementos HTML
const timer = document.getElementById("time")

//URL
const nivel = window.location.search

let intervalTime

switch(nivel){case "?facil":
        intervalTime = 2000
        break
    case "?dificil":
        intervalTime = 1000
        break
    default:
        intervalTime = 1500
}


function getWindowDimension(){
    height  = window.innerHeight
    width   = window.innerWidth
}

function getRandomCoord(){
    getWindowDimension()
    positionX = Math.floor(Math.random() * (width - 90))
    positionY = Math.floor(Math.random() * (height -90))
}

function getRandomTurn(){
    return Math.round(Math.random())
}




setInterval(() => {
    //Destruindo mosca anterior(se existir)
    let moscaAnt = document.getElementById("mosca")
    if(moscaAnt){
        moscaAnt.remove()

        
        document.getElementById('v' + life).src = "img/coracao_vazio.png"
        life++

        setTimeout(()=> {
            if(life > 3){
                window.location.assign("game_over.html")
            }
        },250)
    }
    //Criando as moscas
    let mosca   = document.createElement("img")
    let classe  = "mosca" + Math.ceil(Math.random() * 5)
    mosca.src   = "img/mosca.png"
    mosca.classList.add("mosca")
    mosca.classList.add(classe)
    mosca.classList.add("lado" + getRandomTurn())

    getRandomCoord()
    mosca.style.left = positionX + "px"
    mosca.style.top = positionY + "px"

    mosca.id = 'mosca'

    mosca.onclick = () => {
        document.getElementById("mosca").remove()
    }

    document.body.appendChild(mosca)
}, intervalTime)

setInterval(() => {
    timer.textContent = time
    time--
    if (time <= 0){
        window.location.assign("vitoria.html")
    }
},1000)