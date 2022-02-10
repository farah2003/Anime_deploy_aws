const anemiCards = document.querySelector("#anime-cards");
const animeInfo = document.querySelector(".result");
const text = document.getElementById("#text");
const divFacts = document.getElementById("facts");
const divQoutes = document.getElementById("qoutes");
const url = "https://anime-facts-rest-api.herokuapp.com/api/v1";
const factsApi = "https://anime-facts-rest-api.herokuapp.com/api/v1/";
const videoApi = "http://serpapi.com/search.json?engine=youtube&search_query=";
const videoApiKey =
  "%20official%20trailer&api_key=7150256dff81b2dfc1cb5eb43f317fb47e633d085039f9cded37c6797570c7c2";
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#btn");
const animeImage = document.querySelector("#animeImage");
const video = document.querySelector("#video");
const qoutesBtn = document.querySelector("#qoutesSection");
const factsBtn = document.querySelector("#factSection");
const displayContainer = document.getElementById("content");
const divNotFound =document.querySelector(".notFound")
const qouteApi = "https://animechan.vercel.app/api/quotes/anime?title=";

/////////request function
function request(url, cb) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
      if(xhr.readyState === 4){
        const object = JSON.parse(xhr.responseText);
        cb(object);
      }
     
    }
    else if (xhr.status ===404){
      notFound();
    }
   
  }

  xhr.open("GET", url, true);
  xhr.send();
}
////
function notFound(){
  divNotFound.style.display="flex";
  animeInfo.style.display = "none";
  anemiCards.style.display = "none";
}

////add cards
const addCard = (object) => {
  const card = document.createElement("card");
  ////add card to cards section
  anemiCards.appendChild(card);
  ////create image
  const image = document.createElement("img");
  image.src = object.anime_img;
  ///add img to card
  card.appendChild(image);
  ///create h1 name of movies
  const title = document.createElement("h2");
  title.textContent = object.anime_name;
  console.log(object.anime_name);
  card.appendChild(title);
  card.addEventListener("click", () => {
    redirect(title.textContent);
  });
};

searchBtn.addEventListener("click", () => {
  redirect(searchInput.value);
});

////dispaly data from api in card
function dispaly(object) {
  let arr = object.data;
  arr.forEach((element) => {
    addCard(element);
  });
}

function redirect(value) {
  ///////add the value form search to api
  const inputfactsApi = factsApi + value;
  let newValue = toConvertName(value);
  const inputQouteApi = qouteApi + newValue;
  console.log("nammeme", inputQouteApi);
  ///// add the value to api video
  const inputvideoApi = videoApi + value + videoApiKey;
  animeInfo.style.display = "flex";
  anemiCards.style.display = "none";
  divNotFound.style.display="none";

  request(inputfactsApi, getFacts);
  request(inputvideoApi, getVideo);
  request(inputQouteApi, getQuotes);
}

const toConvertName = (name) => {
  let newName = name.split("_")[0];

  return newName;
};

function getVideo(object) {
  /////get the official trailer link
  let videoLink = object.video_results[0].link.slice(
    32,
    object.video_results[0].link.length
  );
  let link = `https://www.youtube.com/embed/${videoLink}`;
  video.src = link;
}
/////get data from facts Api
function getFacts(object) {
  divFacts.innerHTML = "";
  let objectImage = object.img;
  let arrFacts = object.data;
  animeImage.src = objectImage;

  arrFacts.forEach((ele) => {
    displayFacts(ele);
  });
}
function getQuotes(qoutesArr) {
  qoutesArr.forEach((ele) => {
    displayQoutes(ele);
  });
}

const displayFacts = (fact) => {
  const factParagraph = document.createElement("p");
  const div = document.createElement("div");

  ////get fact form  factobject
  factParagraph.textContent = fact.fact;
  div.appendChild(factParagraph);
  div.style.backgroundColor = "#229954";
  divFacts.appendChild(div);
};

const displayQoutes = (qoute) => {
  /* console.log(ele["character"],ele["quote"]);
    console.log();*/
  const factParagraph = document.createElement("p");
  const div = document.createElement("div");

  ////get fact form  factobject
  factParagraph.textContent = qoute.quote;
  div.appendChild(factParagraph);
  div.style.backgroundColor = "#229954";
  divQoutes.appendChild(div);
};
request(url, dispaly);
