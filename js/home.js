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

////////////////////////////////////////////////////////////
const url2 = "https://anime-facts-rest-api.herokuapp.com/api/v1/"
const url3 = "http://serpapi.com/search.json?engine=youtube&search_query="
const url3Key = "%20official%20trailer&api_key=7150256dff81b2dfc1cb5eb43f317fb47e633d085039f9cded37c6797570c7c2"
const searchInput = document.querySelector('#searchInput')

const searchBtn = document.querySelector('#btn')
searchBtn.addEventListener('click',()=>{
    console.log(searchInput.value)
    const inputUrl2 = url2+searchInput.value;
    console.log(inputUrl2);

    //////////////////////////////////
    const inputUrl3 = url3+searchInput.value+url3Key;
    console.log(inputUrl3);
    request(inputUrl2,getFacts);
    // request(inputUrl3,getVideo);
    ///////////////////////////////
    // let testt = `<p>aaaaaaaaaaaaaa</p>`;
    // document.getElementById('content').innerHTML=testt; 
})

function getVideo(object){
    console.log(object)
}
function getFacts(object){
    console.log(object)
}