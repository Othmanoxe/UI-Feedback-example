const ratingEls = document.querySelectorAll(".rating");

const btnEl = document.getElementById("btn");

const conatinerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl) =>{
    ratingEl.addEventListener("click", (event) =>{
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    })
})


btnEl.addEventListener("click", () =>{
    if(selectedRating !== ""){
        conatinerEl.innerHTML = `
        <strong> Thank you!</strong>
        <br>
        <br>
        <strong> Feedback = ${selectedRating}</strong>
        <br>
        <br>
        <p>We'll use your comment to enhance our customer support.</p>
        `
    }
})

function removeActive() {
    ratingEls.forEach((ratingEl) =>{
        ratingEl.classList.remove("active")
    })
}