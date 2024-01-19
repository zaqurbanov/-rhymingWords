
// deyerimizi almaq ucun inputu secirik.
let input = document.getElementById("input");

// id si btn olan button elementimizi secirik
let btn = document.getElementById("btn");

let list = document.getElementById("list");
let newList =document.getElementById("newList")



let chosenArrays = [];
btn.addEventListener("click",getApi);

let key =  "CK2X4B7Orq6C55GgcHVD3g==6PZ0aCYBKwKXEVB4";
  let options = {
        method: "GET",
        headers: { 'X-Api-Key': key},
    }


 async function getApi() {

    let inputValue = input.value;

    let myUrl="https://api.api-ninjas.com/v1/rhyme?word="+inputValue
    
    input.value = ""  
    list.innerText = "loading...";
    btn.innerText = "loading";
    btn.disabled=true;

    try {
         let  respons = await fetch(myUrl,options);
    let data = await respons.json();
    list.innerText=""
    btn.innerText = "get Rhyme Words"
    let dataFirst25 = data.slice(0,25);
    
    dataFirst25.forEach(element => {
        
        let li = document.createElement("li");
        li.innerText = element;
        li.classList.add("list-item")
        list.appendChild(li)
    });
    btn.disabled = false
    } catch (error) {
        list.innerText = "Error , please try again"
        btn.disabled = false
    }
   
    
}
list.addEventListener("click",chosenWords);

function chosenWords (e){

let chosen = e.target;

if(chosen.classList.contains("list-item")){

chosenArrays.push(chosen.innerText);

    let newLi = document.createElement("li");
    newLi.classList.add('new-list-item');
    newLi.innerText = chosen.innerText
    newList.appendChild(newLi);




}
}




