import CardDetails from "./classes/CardDetails";

const cardNumber = document.getElementById("card-number") as HTMLInputElement;
const cardHolder = document.getElementById("card-holder") as HTMLInputElement;
const expirationDate = document.getElementById("expiration-date") as HTMLInputElement;
const cvv = document.getElementById("cvv") as HTMLInputElement;
const form = document.getElementById("credit-form") as HTMLFormElement;

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
    createCreditcard();
    console.log(arrayOfCreditCards);
  }
}

function createCreditcard(){
  const creditcard = new CardDetails(Number(cardNumber.value), cardHolder.value, expirationDate.value, Number(cvv.value))
  arrayOfCreditCards.push(creditcard);
}

form.addEventListener("submit", validateInfos);

