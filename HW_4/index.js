/1///
// let body = {
//     name :'body',
//     paired:'true',
//     childrens:[
//             {name:'div',
//             paired:'true',
//             childrens:[
//                 {name:'span',
//                 paired:'true',
//                 text:'Enter a data please:'},

//                 {name:'br',
//                 paired:'false'},

//                 {name:'input',
//                 paired:'false',
//                 type:'text',
//                 id:'name'},
                
//                 {name:'input',
//                 paired:'false',
//                 type:'text',
//                 id:'surname'}
//             ]
//         },
//         {name:'div',
//         paired:'true',
//         childrens:[
//             {name:'button',
//             id:'ok',
//             text:'OK',
//             paired:'true'},

//             {name:'button',
//             id:'cancel',
//             text:'Cancel',
//             paired:'true'}
//         ]}
//     ]
//     }

// alert(body.childrens[1].childrens[1].text);
// alert(body.childrens[0].childrens[3].id);



/*second*/

// var notebook = {
//     brand: prompt("Enter brand of Notebook"),
//     type:  prompt("Enter type"),
//     model: prompt("Enter model"),
//     ram: +prompt("Enter ram"),
//     size: +prompt("Enter size"),
//     weight: +prompt("Enter weight"),
//     resolution: {
//         width: +prompt("Enter width"),
//         height: +prompt("Enter height"),
//     },
// };

// var phone = {
//     brand: prompt("Enter brand of phone"),
//     model: prompt("Enter model"),
//     ram: +prompt("Enter ram"),
//     color: prompt("Enter color"),
// };

// var person = {
//     name: prompt("Enter name"),
//     surname: prompt("Enter surname"),
//     married: confirm("Do you married?"),
// }

// person.smartphone = phone;
// person.laptop = notebook;
// person.laptop.owner = person;
// person.smartphone.owner = person;

// person.smartphone.owner.laptop.owner.smartphone == person.smartphone; //true

/////
// let arr =[];
// arr = [+prompt('число'),+prompt('число'),+prompt('число')];
// console.log(arr);


///
// let conFor = confirm("Да или нет?");
// for(let i = 0; i == conFor;){
//     conFor =confirm("Да или нет?");
//     if(conFor == true){
//         break;
//     }
// } 

///
// let arrForMetPush =[];
// for(let i = 0; i != true; ){
//     let promForArr = prompt("add to arr:");
//     if( promForArr == "" || promForArr == null){
//         break;
//     }
//     arrForMetPush.push(promForArr);
// }

///
// let arrForMetPush =[];
// for(let i = 0; i != true; ){
//     let promForArr = prompt("add to arr:");
//     if( promForArr == "" || promForArr == null){
//             break;
//     }
//         arrForMetPush[length++] = promForArr;
//     }



///

// for(let i = 0; i < Infinity;i++ ){
//     if(Math.random() > 0.9){
//         alert("c " + i + " попытки");
//         break;
//     }
// }
// let emptyForProm = prompt("enter");
// for(let i = null; i == emptyForProm;){
//     alert("da")//проверочка
// };

///
// let nNumSum = 1 ;
// let stepNum = 3;
// for(let i = 0; i <= 11 ;i++){
//     alert(nNumSum);
//     nNumSum += stepNum;

// }


///
// let numOfString = 10;
// let iterStr =[];
// for(let i = 0; i < numOfString;i++){
//     iterStr += [i];
//     console.log(iterStr);
// }

//////////////////////////это пригодиться///////////
// let str = " ";

// for(let y = 0;y<8;y++){
//     for(let x =0;x<8;x++){
//         str += (x>y) ? '.' : '*';
        
//     }
// }  
// console.log(str)  
/////////////////////////////////////////////////


// let str=" ";
// let counter = +prompt("введите колличество : ")
// for(let i = 0; i < counter;i++){
//         if(str.length %2){
//             str += "#";
//         }else if(str.length /2){
//             str += " ";
//         }  
// }
// console.log(str);
// if(str.length %2){
//     console.log('не четное');
// }
// else if(str.length /2){
//     console.log('четное');
    
// }
///////////////////////////////
// let numberList ="";
// for(let i =0;i<9;i++){
//     for(let j =0;j<9;j++){
//         numberList+= [j];
//     }
//     numberList+= '\n';
// }
// console.log(numberList)
////////////////////////////
// let chess ="";
// for(let i =0;i<4;i++){
//         for(let j =0;j<9;j++){
//         chess+=".";
//         chess+="#";
//     }
//     if(chess[chess.length -1] === "#"){
//         chess+= '\n';
//         for(let g =0;g<9;g++){
//             chess+="#";
//             chess+=".";   
//                 } 
//             }
//     chess+= '\n';
   
// }
// console.log(chess)

///////////////////////////

// let arr =[];
// for (let i = 0;i <10;i++){
//     arr[i] = i*i*i;
// }
// console.log(arr)
////////////////////////
// let arr =[];
// for (let i = 0;i <10;i++){
//     arr[i] = [i];
//     for(let j = 0;j <10;j++){
//         arr[i][j] = i*j;
//     }
// }
// console.log(arr)
///////////////////////
// let td = document.createElement('td');
// document.body.append(td);
// td.style.border ="2px solid black "
// let arr =[];
// for (let i = 0;i <10;i++){
//     arr[i] = [i];
//     for(let j = 0;j <10;j++){
//         arr[i][j] = i*j;
//         td.innerHTML += `[${arr[i][j]}]`;
//     }
//     td.innerHTML += `<br>`;
// }
// console.log(arr)

let str ="";
let counter = 1;
for(let y = 0;y<6;y++){
    for(let x = 0;x < 10;x++){
        str += '.';
        
    }
    str+= '\n';
}  
console.log(str) 
// str += (x>y) ? '.': '*' ;