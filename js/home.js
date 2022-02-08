const anemiCards= document.querySelector("#anime-cards");
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
addCard();
