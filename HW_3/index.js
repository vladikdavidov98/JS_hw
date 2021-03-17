

function switchSizes(){
let comparisonPromt = prompt("Enter Your Size in USA?","s,m,l,xl,xxl")
let comparisonSize={   
s : [40],
m : [42,44],
l :[46,48],
xl : [50,52],
xxl : [54],
}
switch(comparisonPromt){
    case "s":alert("Your russian size :" + comparisonSize.s);
    break;
    case "m":alert("Your russian size : " + comparisonSize.m);
    break;
    case "l":alert("Your russian size : " + comparisonSize.l);
    break;
    case "xl":alert("Your russian size : " + comparisonSize.xl);
    break;
    case "xxl":alert("Your russian size : " + comparisonSize.xxl);
    break;
    default: alert("ERROR,pls enter s,m,l,xl,xxl");
}
}

function switchIf(){
let color = prompt("Введите цвет","");
if(color == "red"){
    document.write("<div style='background-color: red;'>красный</div>");
    document.write("<div style='background-color: black; color: white;'>черный</div>");
}else if(color =="black"){
    document.write("<div style='background-color: black; color: white;'>черный</div>");
}else if(color =="blue"){
    document.write("<div style='background-color: blue;'>синий</div>");
    document.write("<div style='background-color: green;'>зеленый</div>");
}else if(color =="green"){
    document.write("<div style='background-color: green;'>зеленый</div>");
}else{
    document.write("<div style='background-color: gray;'>Я не понял</div>");
}
}


function promptOr(){
    let age = prompt('введите возраст');
  
    age === null || age === false ? alert('введите корректный возраст') : alert(`Ваш возраст ${age}`);
  }

  function confirmOrThisDay(){
    confirm("шопинг?") || alert("ты - бяка!");  
  }
  function confirmIfThisDay(){
    let shoping = confirm("Шопинг?");
    let shopingAlert = (shoping )?alert(":)"): alert("Ты бяка");
    if(shoping == true){
    alert(":)")
    }else{
    alert("Ты бяка")
    }
  }
////////
function triplePrompt(){ 
let name = prompt("Введите ваше Имя");
let surname = prompt("Введите вашу Фамилию");
let secondName = prompt("Введите ваше отчество");


if(name == null ||name == false){
    name ="Петя";
    
}
if(surname == null|| surname == false){
    surname ="Иванович";
}
if(secondName == null|| secondName == false){
    secondName = "Иванов";
}

let fullName = alert(name+" "+surname +" "+ secondName);
}

////////
function loginAndPswrd(){
let login = "admin";
let password = "qwerty";
let askLog = prompt("Введите Логин:","admin");
if(askLog == login){
    askLog = prompt("Введите пароль?");
    if(askLog == password){
        alert("Поздравляю!");
    }else{
        alert("неверный пароль!");
    }
}else{
    alert("Неверный Логин!")
}
}
/////////
function currencyCalc(){
let usdRate;
let eurRate;
let moneyPoint = prompt("Введите валюту","usd или eur").toLowerCase();
let moneyRate = +prompt("Введите суму:");
let confMoney = confirm("Вы хотите купить?");
let ternaryMonoe = (confMoney)? (usdRate = 27,eurRate = 30):(usdRate = 26.5 , eurRate =29.5);
switch(moneyPoint){
    case "usd": alert(moneyRate * usdRate);
    break;
    case "eur": alert(moneyRate * eurRate);
    default: alert("Введите корректную валюту!");
}


if(confMoney == true){
    usdRate = 27;
    eurRate = 30;
    if(moneyPoint == "usd"){
        alert(moneyRate * usdRate);
        
    }if(moneyPoint == "eur"){
        alert(moneyRate * eurRate);
    }
}else if(confMoney == false || confMoney == null){
    usdRate = 26.5;
    eurRate = 29.5;
    if(moneyPoint == "usd"){
        alert(moneyRate * usdRate);
        
    }if(moneyPoint == "eur"){
        alert(moneyRate * eurRate);
    }
}
}
function scissors(){
let gameProm = Number(prompt("выберите свой вариант: камень - 1, бумага - 2, ножницы -3"));
let gameRandom = Math.ceil(Math.random() * 3);
alert(gameRandom +" Число компьютера");
if(gameProm == 1 && gameRandom == 3 || gameProm == 2 && gameRandom == 1 || gameProm == 3 && gameRandom == 2){
  alert("Вы Выиграли!")
} else if (gameProm == gameRandom){
  alert("Ничья!")
} else{
  alert("Вы проиграли!")
}
console.log(gameRandom)
}
///

function blueBelt(){
var ratios = {
    usd: 25.6,
    eur: 29
}
let money = prompt("Введите какую валюту хотите продать? (usd, eur)").toLowerCase();
let value = prompt("Введите cуму");
if(money == "usd"){
    alert(value * ratios["usd"]);
}if(money == "eur"){
    alert(value * ratios["eur"]);
}else{
  alert("неверно введено значение");
}
}

function blackBelt(){
    let userChange = +prompt("Введите: 1 - камень, 2 - ножницы, 3 - бумага");
    let compChange = Math.floor(Math.random() * 3 + 1);
    
    compChange === 1 && userChange === 1 && alert("Камень(комп.) - Камень(вы) (Ничья!)") ||
    compChange === 1 && userChange === 2 && alert("Камень(комп.) - Ножницы(вы) (Вы проиграли!)") ||
    compChange === 1 && userChange === 3 && alert("Камень(комп.) - Бумага(вы) (Вы выиграли!)") ||
    compChange === 2 && userChange === 1 && alert("Ножницы(комп.) - Камень(вы) (Вы выиграли!)") ||
    compChange === 2 && userChange === 2 && alert("Ножницы(комп.) - Ножницы(вы) (Ничья!)") ||
    compChange === 2 && userChange === 3 && alert("Ножницы(комп.) - Бумага(вы) (Вы проиграли!)") ||
    compChange === 3 && userChange === 1 && alert("Бумага(комп.) - Камень(вы) (Вы проиграли!)") ||
    compChange === 3 && userChange === 2 && alert("Бумага(комп.) - Ножницы(вы) (Вы выиграли!)") ||
    compChange === 3 && userChange === 1 && alert("Бумага(комп.) - Камень(вы) (Вы проиграли!)") ||
    compChange === 3 && userChange === 3 && alert("Бумага(комп.) - Камень(вы) (Ничья!)") || alert("ошибка ввода");
  }

let chooseTask = prompt('Введите название задания(switch: sizes, switch if, prompt: or, confirm: or this days, confirm: if this days, triple prompt, login and password, currency calc, scissors, Задание на синий пояс, Задание на черный пояс)')

switch(chooseTask) {
  case "switch: sizes" : 
      switchSizes();
  break
  case "switch if" : 
        switchIf();
  break
  case"prompt: or":
        promptOr();
  break
  case "confirm: or this days" :
        confirmOrThisDay();
  break
  case "confirm: if this days" : 
        confirmIfThisDay();
  break
  case "triple prompt" : 
        triplePrompt();
  break
  case "login and password" : 
        loginAndPswrd();
  break
  case "currency calc" : 
        currencyCalc();
  break
  case "scissors" :
        scissors();
  break
  case "Задание на синий пояс" : 
        blueBelt();
  break
  case "Задание на черный пояс" :
        blackBelt();
  break
  default : alert("Ошибка ввода")
}