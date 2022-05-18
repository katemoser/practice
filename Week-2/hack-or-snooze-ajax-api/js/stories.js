"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  console.debug("generateStoryMarkup", story);

  const favStatus = isFavorite(story.storyId);

  const hostName = story.getHostName();
  return $(`
      <li id="${story.storyId}">
        <span class="star">
          <i class="${favStatus? "fas" : "far"} fa-star"></i>
        </span>
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}


/** Gets the info from the submit story form, posts a new story, displays new story on DOM */

async function postAndDisplayNewStory(evt){
  console.debug("postAndDisplayNewStory");
  
  evt.preventDefault();
  const title = $("#submit-title").val();
  const author = $("#submit-author").val();
  const url = $("#submit-url").val();

  const newStory = await storyList.addStory(currentUser,{title, author, url})
  
  //show the stories once submitted!
  $submitForm.hide();
  putStoriesOnPage();

}

$submitForm.on("submit", postAndDisplayNewStory);

/** toggles favorite status when click on star */
function toggleFavorite(evt){
  const clickedStoryID = evt.target.closest("li").id;
  console.log(clickedStoryID);

  if(isFavorite(clickedStoryID)){
    console.log("THIS IS MY FAVORITE");
  }

}

function isFavorite(id){
  let isFavorite = false;
  for(let fav of currentUser.favorites){
    if(id === fav.storyId){
      console.log("I love this story");
      isFavorite = true;
    }
  }
  return isFavorite;
}

$allStoriesList.on("click", ".star", toggleFavorite)