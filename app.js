const cardArray = [
	{
		name: "tartines",
		img: "images/tartines.jpg",
	},
	{
		name: "burrito",
		img: "images/burrito.jpg",
	},
	{
		name: "donus",
		img: "images/donus.png",
	},
	{
		name: "poisson",
		img: "images/poisson.jpg",
	},
	{
		name: "sandwich",
		img: "images/sandwich.jpg",
	},
	{
		name: "glace",
		img: "images/glace.jpg",
	},
	{
		name: "tartines",
		img: "images/tartines.jpg",
	},
	{
		name: "burrito",
		img: "images/burrito.jpg",
	},
	{
		name: "donus",
		img: "images/donus.png",
	},
	{
		name: "poisson",
		img: "images/poisson.jpg",
	},
	{
		name: "sandwich",
		img: "images/sandwich.jpg",
	},
	{
		name: "glace",
		img: "images/glace.jpg",
	},
];
cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

/*fonction qui permet d'attribuer a une variable une image+id et l'afficher*/
function createBoard() {
	for (let i = 0; i < cardArray.length; i++) {
		const card = document.createElement("img");
		card.setAttribute("src", "images/interrogation.png");
		card.setAttribute("data-id", i);
		card.addEventListener("click", flipCard);
		gridDisplay.appendChild(card);
		console.log(card, i);
	}
}
createBoard();

function checkMatch() {
	const cards = document.querySelectorAll("img");
	console.log("check for match!");
	const optionOneId = cardsChosenId[0];
	const optionTwoId = cardsChosenId[1];
	if (optionOneId == optionTwoId) {
		alert("You have clicked the same image! ");
	}

	if (cardsChosen[0] == cardsChosen[1]) {
		alert("you found a match !!");
		cards[optionOneId].setAttribute("src", "images/blanc.jpg");
		cards[optionTwoId].setAttribute("src", "images/blanc.jpg");
		cards[optionOneId].removeEventListener("click", flipCard);
		cards[optionTwoId].removeEventListener("click", flipCard);
		cardsWon.push(cardsChosen);
	} else {
		cards[optionOneId].setAttribute("src", "images/interrogation.png");
		cards[optionTwoId].setAttribute("src", "images/interrogation.png");
		alert("try again");
	}
	resultDisplay.textContent = cardsWon.length;
	cardsChosen = [];
	cardsChosenId = [];
	if (cardsWon.length == cardArray.length / 2) {
		resultDisplay.innerHTML = "you win";
	}
}
function flipCard() {
	const cardId = this.getAttribute("data-id");

	cardsChosen.push(cardArray[cardId].name);
	cardsChosenId.push(cardId);
	console.log(cardsChosen);
	console.log(cardsChosenId);
	this.setAttribute("src", cardArray[cardId].img);
	if (cardsChosen.length === 2) {
		setTimeout(checkMatch, 50);
	}
}
