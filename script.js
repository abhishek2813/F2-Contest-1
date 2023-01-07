/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
let arr1 = [
  { id: 1, name: "Abhishek", age: "22", profession: "Web developer" },
  { id: 2, name: "Sunny", age: "30", profession: "intern" },
  { id: 3, name: "roshan", age: "21", profession: "owner" },
];
let arr2 = [
  { id: 1, name: "avinash", age: "23", profession: "CEO" },
  { id: 2, name: "sunit", age: "24", profession: "App developer" },
  { id: 3, name: "ayush", age: "25", profession: "Software Developer" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(function(arr){
    if(arr.profession==='developer'){
      console.log(arr)
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here
arr.forEach((arr)=>{
  if(arr.profession==='developer'){
    console.log(arr)
  }
})
}

function addData() {
  //Write your code here
  arr.push({id:4,name:"susan",age:"20",profession:"intern"})
  console.log(arr);
}
function removeAdmin() {
  //Write your code here
  //console.log(arr);
 arr.pop()
 console.log(arr);
}

function concatenateArray() {
  //Write your code here
  let x = arr1.concat(arr2);
  console.log(x);
}
