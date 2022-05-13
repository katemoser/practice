"use strict";


function handleSubmit(evt){
    evt.preventDefault();
    console.log("Made it here")

    const title = $("#title").val();
    const rating = $("#rating").val();

    addEntry(title, rating);
}
function addEntry(title, rating){

    console.log("title", title, "rating ", rating);
    $("<div>")
        .addClass("entry")
        .text(`Title: ${title}, Rating: ${rating}/10`)
        .append( $("<button class='remove-button'>Remove</button>"))
        .appendTo($("#movie-list"));
}

function remove(evt){

    $(evt.target.parentNode).remove();
}

$("#new-movie-button").on("click", handleSubmit);

$("#movie-list").on("click", ".remove-button", remove);