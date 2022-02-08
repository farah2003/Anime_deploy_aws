const anemiCards= document.querySelector("#anime-cards");

////add cards
const addCard=(object)=>{

    const card=document.createElement("card");
    ////add card to cards section 
    anemiCards.appendChild(card);
    ////create image
    const image=document.createElement("img");
    image.src=object.anime_img;
    ///add img to card
    card.appendChild(image);
    ///create h1 name of movies
    const title=document.createElement("h2");
    title.textContent=object.anime_name;
    console.log(object.anime_name);
    card.appendChild(title);

}



const url="https://anime-facts-rest-api.herokuapp.com/api/v1";
function request(url,cb){
  
    const xhr=new XMLHttpRequest();
  
    xhr.onreadystatechange=function(){
        if(xhr.status=== 200 && xhr.readyState ===4){
            const object =JSON.parse(xhr.responseText);
            cb(object);
        }
    
    }
   
xhr.open('GET',url,true);
xhr.send();
}


function dispaly(object){
    let arr =object.data
   arr.forEach(element => {
     
   addCard(element);
        
    });



}
request(url,dispaly);