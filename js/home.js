const anemiCards= document.querySelector("#anime-cards");
const searchBtn=document.querySelector("btn");
const searchInput=document.querySelector("#searchInput")
let newArray=[];
////add cards
const addCard=(object)=>{

    const card=document.createElement("card");
    ////add card to cards section 
    anemiCards.appendChild(card);
    ////create image
    const image=document.createElement("img");
    image.src=src=object.url;
    ///add img to card
    card.appendChild(image);
    ///create h1 name of movies
    const title=document.createElement("title");
    title.textContent=object.name;
    cards.appendChild(title);

}
searchInput.addEventListener('input',(e)=>{
    event.preventDefault();
     let value =searchInput.value.toLowerCase();
     search(value);

})
const search=(arr,name)=>{
    if (name){
        let newArr=arr.filter((ele)=>{
            return ele.name === name;
        })
        return newArr;
    }
    
}
const displayCards=(arr)=>{
    anemiCards.innerHTML="";
    arr.forEach(element => {
        return addCard(element);
    });
}