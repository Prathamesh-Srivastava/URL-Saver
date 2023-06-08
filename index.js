const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const List = document.getElementById("list");
const deleteBtn = document.getElementById("delete-btn");

let array =[];

let UrlFromStorage = localStorage.getItem("MyUrls");

if(UrlFromStorage){
    array = JSON.parse(UrlFromStorage);
    renderUrls();
}

inputBtn.addEventListener("click",function(){
    array.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("MyUrls",JSON.stringify(array));
    renderUrls(console.log(array));
})

deleteBtn.addEventListener("click",function(){
    localStorage.clear();
    array = [];
    renderUrls();
})

function renderUrls(){
    let listItems="";
    for(let i=0;i<array.length;i++){
        listItems+= `<li>
        <a href='${array[i]}' target='_blank '>
            ${array[i]}
                    </a></li>`;
    }
    List.innerHTML = listItems;
}

