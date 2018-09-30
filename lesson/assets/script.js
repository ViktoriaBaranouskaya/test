
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.jquerySelector(", close");

console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);

function addItem(){
}
function dellItem(){
}

btn1.addEventListener("click", addItem);

