"use strict";

const GIPHY_API_KEY = "FEj8wRnM5gf6Rag7IEXE4ET4qpwmBhnF";
const BASE_URL = "https://api.giphy.com/v1/gifs/search"

const NUM_GIFS_IN_RESPONSE = 20;

console.log("Let's get this party started!");

function handleClick(evt){
    evt.preventDefault();

    const searchTerm = $("#search-bar").val();
    console.log("searching for:", searchTerm);

    getAndAppendGif(searchTerm);
}

function removeOnClick(evt){
    console.log("You clicked it", evt.target);
    $(evt.target).remove();
}

async function getAndAppendGif(searchTerm){
    const newGif = await getGif(searchTerm);

    $("<img>")
        .addClass("gif")
        .attr("src", newGif.images.fixed_height.url)
        .appendTo($("#gifs"));
}

async function getGif(searchTerm){
    let response = await axios.get(
        BASE_URL, 
        {params: {
            q: searchTerm,
            api_key: GIPHY_API_KEY,
            limit: NUM_GIFS_IN_RESPONSE
        }}
    )
    console.log("RESPONSE:", response.data.data)
    let randomInt = Math.floor(Math.random() * NUM_GIFS_IN_RESPONSE);
    return response.data.data[randomInt];
}

$("#search-button").on("click", handleClick);
$("#gifs").on("click", ".gif", removeOnClick)