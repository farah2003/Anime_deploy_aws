const anemiCards= document.querySelector("#anime-cards");
let searchVideo = `<iframe width="560" height="390"src="" allowfullscreen></iframe>`
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

const displayContainer = document.getElementById('content');
let newCont = ``;
const searchBtn = document.querySelector('#btn')
searchBtn.addEventListener('click',()=>{
    console.log(searchInput.value)
    const inputUrl2 = url2+searchInput.value;
    console.log(inputUrl2);

    //////////////////////////////////
    const inputUrl3 = url3+searchInput.value+url3Key;
    console.log(inputUrl3);
    request(inputUrl2,getFacts);
    request(inputUrl3,getVideo);
})



function getVideo(object){
    let videoLink = object.video_results[0].link.slice(32,object.video_results[0].link.length);
    console.log(object)
    console.log(videoLink)
    searchVideo = `<iframe width="560" height="390"src="https://www.youtube.com/embed/${videoLink}" allowfullscreen></iframe>`
}
function getFacts(object){
    console.log(object)
    let objectImage = object.img
    console.log("this is object image",objectImage)
    let facts = object.data
    console.log("this is facts",facts)
    
    newCont = `
    <section class="result">
        <div class="img-video">
          <img
            src="${objectImage}"
          />
          ${searchVideo}
        </div>
        <h2>some facts about your anime</h2>
      </section>`
      document.getElementById('facts').innerText=``;
      facts.forEach(ele=>{
        addFacts(ele)
      })
      displayContainer.innerHTML = newCont;
}
const addFacts = (facts)=>{
    const fact = document.createElement('p')
    fact.innerText = facts.fact
    console.log(fact)
    document.getElementById('facts').appendChild(fact);
}