//question 1:

let isEqual = (obj1, obj2) => {
    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);

    if(obj1Keys.length !== obj2Keys.length){
    return false;
    }
for(let objkey of obj1Keys){
    if(obj1[objkey] !== obj2[objkey]){
        return false;
    }
}
return true;
}

let obj1 = {
    name: "Person1", 
    age: 5
}
let obj2 = {
    age: 5, 
    name: "Person1"
}
JSON.stringify(obj1) === JSON.stringify(obj2)
isEqual(obj1, obj2)
console.log(isEqual(obj1, obj2))

//////////////////////////////////////////////////////////////////////////////////////////////
//question 2:

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
    var data = JSON.parse(this.responseText);
    printData(data);
}
function printData(data){
if(data.length>0){
for(let i=0; i<data.length; i++){
const{name = {}, region='', subregion ='',population = 0} = data[i];
console.log(name.common, region, subregion, population)
}
}
}

//////////////////////////////////////////////////////////////////////////////////////////////
//question 3:


var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
    var data = JSON.parse(this.responseText);
    printData(data);
}
function printData(data){
if(data.length>0){
for(let i=0; i<data.length; i++){
const{name = {}, region='', subregion ='',population = 0, flags = {}} = data[i];
console.log(name.common, region, subregion, population, flags.png)
}
}
}