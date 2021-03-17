let a ={
    name:"John",
    surname:"Johnson"
}
let b = Object.assign({},a);
let c = Object.assign({},b);
a.age = 20;
b.fathername = "Иванович";
c.sex ="Man";

// let filtObj = function(obj){
//     let promForObj = prompt("enter key");
//     for(let key in obj){
//         if(key == promForObj){
//             alert(obj[key]);
//         }
//     }
// }
// filtObj(b);

let person = [{...a},{...b},{...c},{
    name:"Julia",
    surname:"Robberts",
    age:50,
    sex:"Woman"
}];
let forAddToPerson ={
    "name":"Vlad",
    "surname":"Davidov",
    "fathername":"Sergeevich",
    "age":21,
    
    }
person.push(forAddToPerson);

for (let i = 0; i < person.length;i++){
    console.log(person[i])
}
for(let obj of person){
    console.log(obj['name'],obj['surname'])
 }

for(let obj of person){
    // console.log(obj);
    for(let key in obj ){
     console.log(obj[key])
    }
    
}
for(let obj of person){
    if(obj.fathername){
        obj.fullName = (obj.name+ " " +obj.surname+" "+ obj.fathername );
    }else{
        obj.fullName = (obj.name+ " " +obj.surname);
    }
    console.log(obj)
}

console.log( JSON.stringify(person) );

    
   //////////////////
    let valArr;
    var str = "<table border='1'>"
    let counter =0;
        for(let value of person){
            for(let key in value){
                valArr = value.fullName;
            
            }
            str += `<tr><td>${valArr}</td><td>${counter++}</td></tr>`
        }
    
    str += "</table>"
    
    console.log(str)
    document.write(str)

////////////////////////

let table = document.createElement("table");
    let tbody = document.createElement('tbody')
    table.append(tbody)
    for(let key of person){
        for(let qwe in key){
        let value = person[qwe];
        let tr = document.createElement('tr');
        tbody.append(tr)
        
        let th = document.createElement("th");
        let td = document.createElement("td");
        tr.append(th);
        tr.append(td);
        td.innerText = `${key[qwe]}`;
        td.style.color ='red';
        th.innerText = `${qwe}`;
        }
    }
    
    document.body.append(table);
