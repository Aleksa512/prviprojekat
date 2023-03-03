//console.dir(document);
//console.log(document.domain);
//console.log(document.title);
//console.log(document.head);
//console.log(document.all);

document.title = "DOM vezba";

let items = document.getElementById("items");
let listItems = document.getElementsByClassName("list-item");

for(let i=0; i < listItems.length; i++)
{
    listItems[i].style.color = "white";
    if(i%2==0)
    {
        listItems[i].style.backgroundColor = "yellow";
    }
    else listItems[i].style.backgroundColor = "#200E6F";
}

console.log(document.getElementById("container"));

console.log(document.getElementsByClassName("list-item"));

//getElementByTagName

console.log(document.getElementsByTagName("h2"));

document.getElementById("main-title").textContent="Glavni naslov";

listItems[3].textContent="Cetvrti";

listItems[3].backgroundColor="red";

document.querySelector("#random-element p").style.backgroundColor="yellow";
document.querySelector("#element1 p").style.backgroundColor="red";

let listitem=document.getElementById("items");

console.log(items.parentNode);
items.parentNode.style.backgroundColor="blue";

console.log(items.parentElement);

console.log(items.childNodes);
items.childNodes[1].style.backgroundColor="brown";

console.log(items.children);
items.children[0].style.backgroundColor="brown";

items.previousElementSibling.style.color="red";

let drugiElement=document.getElementsByClassName("list-item")[1];

drugiElement.parentElement.previousElementSibling.style.backgroundColor="green";

let newDiv=document.createElement('div');
console.log(newDiv);

newDiv.id="new-div"
newDiv.className="new-div-class"
let newDivText=document.createTextNode("Hello world");
newDiv.appendChild(newDivText);
let container=document.querySelector("#container");
let h2=document.querySelector("#container h2");
container.insertBefore(newDiv,h2);

//
let itemsContainer=document.querySelector("#items");
let listItems1=document.querySelectorAll(".list-items");

let newLi=document.createElement('li');
newLi.className="list-item";
let LiText=document.createTextNode("peti red");
newLi.appendChild(LiText);
itemsContainer.insertBefore(newLi,itemsContainer.lastChild);



let textBox=document.getElementById("textBox");
let button=document.getElementById("button");

let addItemToList=function(){
    let text=textBox.value;
    let newLi=document.createElement('li');
    newLi.className='list-item';
    let LiText=document.createTextNode(text);
    newLi.appendChild(LiText);
    itemsContainer.insertBefore(newLi,itemsContainer.lastChild);
}
button.addEventListener('click',addItemToList);