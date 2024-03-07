const userName = prompt('Come ti chiami?'); //string
const userSurname = prompt('Quale è il tuo cognome?'); //string
const userColor = prompt('Quale è il tuo colore freferito?'); //string
const randomNumber = Math.round(Math.random()*100) //number
const userPwd = userName + userSurname + userColor + randomNumber; //string
console.log('La tua password è: ',userPwd); //string