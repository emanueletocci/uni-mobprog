const cards = document.querySelectorAll(".memory-card");
const allEmojis = [
    "🍎", "🍌", "🍒", "🍇", "🍉", "🍓", "🍍", "🥝",
    "🍑", "🍈", "🍋", "🍊", "🍏", "🍐", "🍅", "🥥"
];

// Select a subset of emojis based on the grid size

const gridSize = 16; 
const numPairs = gridSize / 2; 
const emojis = allEmojis.slice(0, numPairs); 
const cardValues = [...emojis, ...emojis]; 

let isFlipped = false;
let firstCard, secondCard;

// Function to flip cards 
function flipCard() {
    if (this === firstCard) return;
    this.classList.add("flipped");
    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
        return;
    } 
    secondCard = this;
    checkForMatch();
}

// Function to check if two cards (emoji) match
function checkForMatch(){
    const isMatch = firstCard.dataset.card === secondCard.dataset.card; // Check if the cards match
    if(!isMatch){
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            resetBoard();
        }, 1500);
    }
}

// Function to reset the board
function resetBoard() {
    [hasFlippedCard, firstCard, secondCard] = [false, null, null]; // Reset the variables
}


// Listener to handle click on cards
cards.forEach(card => card.addEventListener("click", flipCard));

cards.forEach((card, index) => {
    card.innerHTML = `<span class="emoji">${cardValues[index]}</span>`;
});
