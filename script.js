import { API_KEY } from "./api.js"

const resultContainer = document.querySelector('.results-container')

const getData = async function(query, limit){
  try{
  const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)  
  const data = await resp.json()
  console.log(data);
  }catch(err){
    console.error(err)
  }
}
getData('laugh', 1)
const generateMarkup = function(){
  resultContainer.innerHTML = "";

  data
  
}

