import { API_KEY } from "./api"

const resultContainer = document.querySelector('.results-container'),

const getData = async function(query, limit){
  const resp = fetch(`https://api.giphy.com/v1/gifs/search?api_key=zZXxZ0Xga2RdaJJYsGqi4mgnYkMH6OpG&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)  
}()