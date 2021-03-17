/////////////1//////////
// var a = 5;  
// var b, c;
// b = (a * 5);  
// (b = (c = b/2));


    ////////2,3//////
// function returnPerson (name) {  
//     return  
//     {  
//         name : name  
//     };  
// } 


//4//
// let year = (2020 - howOldAU);
// let howOldAU = Number(prompt("How old are you?"));
// alert (year+" Your year of birth");

//5//
// let degrees = Number(prompt("select degrees, 1 - convert to fahrenheit, 2 - convert to celsium"));
// let celsium = 0;
// let fareng = 32;
// if(degrees == 1){
//     let howMuckDeg = Number(prompt("enter value: "));
//     alert((howMuckDeg * 1.8)+32+" °F");

// }else if (degrees == 2){
//     let howMuckDeg = Number(prompt("enter value: "));
//     alert((howMuckDeg -32)/1.8 +" °C");
// }   
///6
// let a = Number(prompt("Введите число котороое хотите поделить"));

// let b = Number(prompt("введите делитель"));
// alert(Math.floor(a/b));
// alert(Math.ceil(a/b));

///7//
//  let askOdd = +prompt("Введите число:");
//  if(isFinite(askOdd)){
//     console.log("it num");
//     }if(askOdd % 2){
//         alert("не четное!");
//        }else if(askOdd / 2 ){
//         alert("четное!")
//        }else(
//            alert(" 0 ")
//        )

////8////
// let UserProm = prompt("Enter your Name:");
// alert("Hello, "+UserProm);
/////9////
// let UserString = String(prompt("enter your nickname:","user"));
// if( UserString.indexOf("user qwerty",0) == 0){
//     alert("Hello, "+UserString)
// }else if (UserString.includes("admin qwerty")){
//     alert(UserString)
// }else{
//     alert("ERROR!")
// }

////10///

// let confTesting = confirm("Are you Man?");
// console.log(confTesting);//true || false.///

/// 11///
// let confTestTrue;
// let confTestFalse;
//  if(confTesting == true){
//      confTestTrue = confTesting;
//      alert("U Man!")
//  } else if(confTesting == false){
//      confTestFalse = confTesting;
//      alert("U Woman!")
//  }

//  console.log(confTestTrue);
//  console.log(confTestFalse);

// let modRealLife = ["home","job","gym"];
// let ArrBoolean = [];
// ArrBoolean = [confTestTrue,confTestFalse];

////////////
// let arr = [1,2];
// arr[2] = arr[0]+ arr[1];
// let arrOfFruits = ["Apple","Orange","Strawberry "];


// let ArrSum = function(arr){
//     arr[3] = arr[0]+arr[1]+arr[2];
// }
// console.log(ArrSum(arrOfFruits));
/////////

// let moto = {
//     name : "Zongsheng",
//     feature :[
//         {
//         power: 250,
//         seating: "double",
//         transmission: "six-speed",
//         maxSpeed: 170
//     }
//     ]

// }

// moto.feature[0].power = "996 HP";
// moto.feature[0].maxSpeed = "310 KM/PH";
// moto.name = "Ducati";


// var age = +prompt("Сколько вам лет?","");
// if (age <= 0 ){
//     alert("Вы еще не родились:)")
// }
// else if (age < 18){
//     alert("школьник");
// }
// else if (age >= 18 && age <= 30){
//     alert("молодеж");
// }
// else if (age > 30 && age <= 45){
//     alert("зрелость");
// }
// else if (age > 45 && age <= 60){
//     alert("закат");
// }
// else if (age >= 60){
//     alert("как пенсия?");
// }

// let comparisonPromt = prompt("Enter Your Size in USA?")
// let comparisonSize={   
// s : [40],
// m : [42,44],
// l :[46,48],
// xl : [50,52],
// xxl : [54],
// }

// if(comparisonPromt == "S"){
//     alert("Your russian size :" + comparisonSize.s);
// }else if(comparisonPromt == "M"){
//     alert("Your russian size : " + comparisonSize.m);
// }else if(comparisonPromt == "L"){
//     alert("Your russian size : " + comparisonSize.l);
// }else if(comparisonPromt == "XL"){
//     alert("Your russian size : " + comparisonSize.xl);
// }else if(comparisonPromt == "XXL"){
//     alert("Your russian size : " + comparisonSize.xxl);
// }
//////

// let accessSex = (confTesting == true) ? alert("U Man") : alert(" U Woman");

let howFloors = +prompt("сколько этажей в доме?");
let howApartmentsOnFloor = +prompt("Сколько квартир на этаже?");
let numberOfyourAppart = +prompt("номер вашей квартиры?");

let calcFloorsAndApart = howFloors * howApartmentsOnFloor;
let houseNum = numberOfyourAppart / calcFloorsAndApart;
let numberOfFloor = (numberOfyourAppart % calcFloorsAndApart) / howApartmentsOnFloor;

alert(Math.ceil(houseNum)+" - Номер вашего дома,Этаж - "+Math.ceil(numberOfFloor));
