import CardDetails from "./classes/CardDetails";

const cardNumber = document.getElementById("card-number") as HTMLInputElement;
const cardHolder = document.getElementById("card-holder") as HTMLInputElement;
const expirationDate = document.getElementById("expiration-date") as HTMLInputElement;
const cvv = document.getElementById("cvv") as HTMLInputElement;
const form = document.getElementById("credit-form") as HTMLFormElement;
const digitsH2tag = document.getElementById("digits") as HTMLHeadElement;
const fullNameH2Tag = document.getElementById("fullName") as HTMLHeadElement;
const dateH2Tag = document.getElementById("date") as HTMLHeadElement;

// function isValidDate(dateString: string): boolean {
//   const date = new Date(dateString);
//   return !isNaN(date.getTime());
// }

const arrayOfCreditCards: CardDetails[] = [];

console.log(expirationDate.value);

function validateInfos(event: Event){
  event.preventDefault();
  const cardNumberString = cardNumber.value;
  const cvvString = cvv.value;
  
  if (cardNumberString.length !== 16){
    window.alert("Card Number is Invalid")
  } else if (cvvString.length !== 3){
    window.alert("CVV is Invalid")
  } else if (arrayOfCreditCards.length >= 5){
    window.alert("Maximum Capacity is 5 Creditcards")
  } else {
    changeHTMLCreditcardsvalues();
    createCreditcard();
    createExtraCreditCard();
    console.log(arrayOfCreditCards);
  }
}

function createCreditcard(){
  const creditcard = new CardDetails(Number(cardNumber.value), cardHolder.value, expirationDate.value, Number(cvv.value))
  arrayOfCreditCards.push(creditcard);
}

function changeHTMLCreditcardsvalues(){
  const numberWithSpaces = [];
  const cardNumberString = cardNumber.value.toString();
  const cardNumberArray = cardNumberString.split("");

  console.log(cardNumberArray);

  for (let i = 1, j = 0; i < cardNumberString.length + 1; i++, j++){
    numberWithSpaces.push(cardNumberArray[j]);
    if (i % 4 === 0 && i !== 0){
      numberWithSpaces.push(" ");
    }
}

  const finalNumber = numberWithSpaces.join("");
  digitsH2tag.textContent = finalNumber;
  fullNameH2Tag.textContent = cardHolder.value;
  dateH2Tag.textContent = expirationDate.value.replace("-", "/").replace("20", "");
}

function createExtraCreditCard(){
  const cardContainer = document.querySelector(".credit-card");
  const copyCardContainer = cardContainer!.cloneNode(true);
  document.body.appendChild(copyCardContainer); 
}


form.addEventListener("submit", validateInfos);
