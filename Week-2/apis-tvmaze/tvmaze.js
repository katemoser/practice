"use strict";

const BASE_URL = "http://api.tvmaze.com";
const IMAGE_IF_MISSING = "https://tinyurl.com/tv-missing";

const $showsList = $("#showsList");
const $episodesArea = $("#episodesArea");
const $searchForm = $("#searchForm");

/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function getShowsByTerm(searchTerm) {
  // ADD: Remove placeholder & make request to TVMaze search shows API.

  let response = await axios.get(`${BASE_URL}/search/shows`, {
    params: {
      q: searchTerm,
    },
  });

  let shows = response.data.map((show) => {
    return {
      id: show.show.id,
      summary: show.show.summary,
      name: show.show.name,
      image: show.show.image?.medium || IMAGE_IF_MISSING,
    };
  });
  console.log(shows);
  return shows;
}

/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();

  for (let show of shows) {
    const $show = $(
      `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img 
              src=${show.image}
              alt="Bletchly Circle San Francisco" 
              class="w-25 me-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>  
       </div>
      `
    );

    $showsList.append($show);
  }
}

/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $("#searchForm-term").val();
  const shows = await getShowsByTerm(term);

  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});

/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

async function getEpisodesOfShow(id) {
  let response = await axios({
    baseURL: `${BASE_URL}/shows/${id}/episodes`,
    method: "GET",
  });
  console.log(response.data);

  const episodes = response.data.map(episode => ({
    id: episode.id,
    name: episode.name,
    season: episode.season,
    number: episode.number
  }))

  populateEpisodes(episodes);
}

$("#showsList").on("click", ".Show-getEpisodes", async function (evt) {
  const id = $(evt.target).closest(".Show").data("show-id");
  await getEpisodesOfShow(id);
});

/** Write a clear docstring for this function... */

function populateEpisodes(episodes) { 
  const $episodesList = $("#episodesList");
  $episodesArea.show();
  $episodesList.empty();
  
  for(let e of episodes){
    $(`<li class="episode">${e.name} (Season ${e.season}, Number ${e.number})</li>`)
      .appendTo($episodesList);
  }


}
