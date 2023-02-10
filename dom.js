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
        listItems[i].style.backgroundColor = "#7C1AC9";
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

document.querySelector("#random-element p").style.backgroundColor="#B0DEBA";
document.querySelector("#element1 p").style.backgroundColor="red";
