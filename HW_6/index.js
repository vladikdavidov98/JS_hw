function a(str){
    alert(str)
}
// a("Привет!") // вызывает alert("Привет!")
///////////////
function cube(x){
    x=x*x*x;
   return x;
}
// alert(cube(3))
//////////////
function avg2(a,b){
    let result = (a + b) / 2;
    return result ;
}
// alert(avg2(1,2)) // возвращает 1.5
// alert(avg2(10,5))
// //////////////

function sum3 (...arg){
    let result =0;
 for(let i =0;i<arg.length;i++){
    result +=arg[i];
    
 }
 alert(result)
}
// sum(1,2,3)
// sum(12,12)


//////////
function intRandom (max,min = 0,){
    
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
// alert(intRandom(0,10))
// alert(intRandom(-1,-1))
// alert(intRandom(0,1))
// alert(intRandom(10))
// alert(intRandom(10))
// alert(intRandom(10))
////////////////////////////////////////////////
function greetAll(...str){
    alert("hello ," + str );
}
function greetAll(...arguments){
    for(let i =0;i <arguments.length;i++){
    //    alert("hello ," + arguments[i] ); 
    }
    alert("hello ," + arguments );
}
// greetAll("Супермен,Юля,влад")
// greetAll("Superman") // выводит alert "Hello Superman"
// greetAll("Superman", "SpiderMan") // выводит alert "Hello Superman, SpiderMan"
// greetAll("Superman", "SpiderMan", "Captain Obvious")
// /////////////////////////////////////////////////////////////


function sum (...arguments){
    let result=0;
    for(let i =0;i<arguments.length;i++){
        result += arguments[i]
    }
    return result
}
console.log(sum(100,200,400,1000))
console.log(sum(1,3))

function aSample(){
    a("Привет!") // вызывает alert("Привет!")
}

function cubeSample(){
    cube(5) // => 125
}
function avg2Sample(){
    alert(avg2(10,5))
}
function sum3Sample (){
    alert(sum3(5,10))
}
function intRandomSample (){
    alert(intRandom(10))
}
function greetAllSample (){
alert(greetAll("Superman", "SpiderMan", "Captain Obvious"));
}
function sumSample (){
    alert(sum(100,200,400,1000));
}
var sample = prompt("Введите название задания")
switch (sample.toLowerCase()){
    case "a": aSample()
        break
    case "cube": cubeSample()
        break
    case "avg2": avg2Sample()
        break
    case "sum3" : sum3Sample ()
        break
    case "intrandom": intRandomSample ()
        break
    case "greetall" : greetAllSample ()
        break
    case "sum" :sumSample ()
}

/////////////////////////

objWithFoo = {};
objWithFoo.a = a;
objWithFoo.cube =cube;
objWithFoo.avg2 =avg2;
objWithFoo.sum3 = sum3;
objWithFoo.intRandom = intRandom;
objWithFoo.greetAll = greetAll;
objWithFoo.sum =sum;
//////////////////////////////


