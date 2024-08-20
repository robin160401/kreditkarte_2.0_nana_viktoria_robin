import CardDetails from "./classes/CardDetails";

const cardNumber = document.getElementById("card-number") as HTMLInputElement;
const cardHolder = document.getElementById("card-holder") as HTMLInputElement;
const expirationDate = document.getElementById(
  "expiration-date"
) as HTMLInputElement;
const cvv = document.getElementById("cvv") as HTMLInputElement;
const form = document.getElementById("credit-form") as HTMLFormElement;
const digitsH2tag = document.getElementById("digits") as HTMLHeadElement;
const fullNameH2Tag = document.getElementById("fullName") as HTMLHeadElement;
const dateH2Tag = document.getElementById("date") as HTMLHeadElement;
const mainContainer = document.getElementById("container") as HTMLDivElement;

const arrayOfCreditCards: CardDetails[] = [];

function validateInfos(event: Event) {
  event.preventDefault();
  const cardNumberString = cardNumber.value;
  const cvvString = cvv.value;

  if (cardNumberString.length !== 16) {
    window.alert("Card Number is Invalid");
  } else if (cvvString.length !== 3) {
    window.alert("CVV is Invalid");
  } else if (arrayOfCreditCards.length >= 5) {
    window.alert("Maximum Capacity is 5 Creditcards");
  } else {
    changeHTMLCreditcardsvalues();
    createCreditCard();
    if (arrayOfCreditCards.length != 5){
        createExtraCreditCard();
      }
    console.log(arrayOfCreditCards);
  }
}

function createCreditCard(){
  const creditcard = new CardDetails(
    Number(cardNumber.value),
    cardHolder.value,
    expirationDate.value,
    Number(cvv.value)
  );
  arrayOfCreditCards.push(creditcard);
}

function changeHTMLCreditcardsvalues() {
  digitsH2tag.textContent = changeCardNumber(cardNumber.value);
  fullNameH2Tag.textContent = cardHolder.value;
  dateH2Tag.textContent = expirationDate.value.replace("20", "").replace("-", "/");
}

function createExtraCreditCard() {
  const cardContainer = document.querySelector(".credit-card")!.cloneNode(true) as HTMLElement;
  
  (cardContainer.querySelector("#digits") as HTMLElement).textContent = changeCardNumber(cardNumber.value);
  (cardContainer.querySelector("#fullName") as HTMLElement).textContent = cardHolder.value;
  (cardContainer.querySelector("#date") as HTMLElement).textContent = expirationDate.value.replace("20", "").replace("-", "/");

  mainContainer.appendChild(cardContainer);
}

form.addEventListener("submit", validateInfos);

function changeCardNumber(cardNumber: string): string {
  const numberWithSpaces = [];
  const cardNumberArray = cardNumber.split("");
  for (let i = 1, j = 0; i < cardNumber.length + 1; i++, j++) {
    numberWithSpaces.push(cardNumberArray[j]);
    if (i % 4 === 0 && i !== 0) {
      numberWithSpaces.push(" ");
    }
  }
  const finalNumber = numberWithSpaces.join("");
  return finalNumber;
}
