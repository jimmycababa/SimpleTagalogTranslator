
document.querySelector('#white').addEventListener('click', grainWhite)
document.querySelector('#green').addEventListener('click', grassGreen)
document.querySelector('#blue').addEventListener('click', skyBlue)
document.querySelector('#brown').addEventListener('click', uglyBrown)
document.querySelector('#nice').addEventListener('click', niceBehave)


function grainWhite () {
  let total = 'Kanin'
  document.querySelector('#placeToPutResult').innerText = total
}

function grassGreen(){
  let total = 'Damuhan'
  document.querySelector('#placeToPutResult').innerText = total
}

function skyBlue(){
  let total = 'Kalangitan'
  document.querySelector('#placeToPutResult').innerText = total
}

function uglyBrown(){
  let total = 'Pangit'
  document.querySelector('#placeToPutResult').innerText = total
}

function niceBehave(){
  let total = "Mabait"
  document.querySelector('#placeToPutResult').innerText = total
}
