let movieReviewsContainer = document.getElementById("reviewsContainer");
let reviewElement = document.getElementById("reviewTextarea");
let AddToReview = document.getElementById("addBtn");
let titleInput = document.getElementById("titleInput");

AddToReview.onclick = function() {
    let TakingValue = titleInput.value
    let H1 = document.createElement("h1");
    H1.textContent = "Movie Title: " + TakingValue;
    H1.classList.add("ReviewHeading");
    movieReviewsContainer.appendChild(H1);

    let TakingReview = reviewElement.value;
    let p = document.createElement("p");
    p.textContent = "Review: " + TakingReview;
    p.classList.add("para");
    movieReviewsContainer.appendChild(p);

}
