// Utility functions to get elements
const select = (selector) => document.querySelector(selector)
const selectAll = (selector) => document.querySelectorAll(selector)

// Get elements
const inputFeedback = select(".input-feedback")
const outputFeedback = select(".output-feedback")
const ratingButtons = selectAll(".rating-btn")
const submitButton = select(".submit-btn")
const selectionFeedback = select(".selection-feedback")

// Add event listeners
let isRatingSelected = false
let selectedButton

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleClickColor(button)
        isRatingSelected = true
        selectedButton = button
    })
})

submitButton.addEventListener('click', () => {
    if (isRatingSelected) {
        handleSelectionFeedback(selectedButton)
        handleRatingSubmission()
    }
})

// Custom Functions

function handleClickColor(button) {
    ratingButtons.forEach(button => {
        button.classList.remove("active-rating-button")
    })
    button.classList.add("active-rating-button")
}

function handleSelectionFeedback(ratingButton) {
    selectionFeedback.textContent = `You selected ${ratingButton.textContent} out of 5`
}

function handleRatingSubmission() {
    inputFeedback.classList.add("invisible")
    outputFeedback.classList.remove("invisible")
}