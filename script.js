// import { stat } from "fs"
import { API_KEY } from "./api.js";

const resultContainer = document.querySelector(".results-container");
const inputValue = document.querySelector(".input-text");
const inputLimit = document.querySelector(".input-limit");
const searchButton = document.querySelector(".search-btn");

const getData = async function (query, limit) {
  try {
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    );
    const data = await resp.json();

    //generating markup
    generateMarkups(data);
  } catch (err) {
    console.error(err);
  }
};
// getData("laugh", 1);
searchButton.addEventListener("click", function () {
  if (inputValue.value && inputLimit.value) {
    let query = inputValue.value;
    let limit = inputLimit.value;
    getData(query, limit);
    inputValue.value = inputLimit.value = "";
  } else {
    alert("Input the Gif and limit");
  }
});

// searchButton.addEventListener("click", function () {
//   inputValue.value = "";
//   let query = inputValue.value;
//   console.log(inputValue.value);
// });

const generateMarkups = function (data) {
  resultContainer.innerHTML = "";

  data.data.forEach((gif) => {
    const gifData = {
      imageUrl: gif.images.fixed_height_downsampled.url,
      title: gif.title,
      sourceUrl: gif.url,
    };

    const markup = `
        <div class="gif-card">
          <img src="${gifData.imageUrl}" alt="${gifData.title}" class="gif-image">
          <div class="gif-info">
            <h3 class="gif-title">${gifData.title}</h3>
            <a href="${gifData.sourceUrl}" target="_blank" class="gif-source">View on Giphy</a>
          </div>
          <button class="copy-link-btn" data-link=${gifData.sourceUrl}>Copy Link</button>
        </div>
          </div>`;

    resultContainer.insertAdjacentHTML("beforeend", markup);
  });
};
