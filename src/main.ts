

const cardNumber = document.getElementById("card-number") as HTMLInputElement;
const cardHolder = document.getElementById("card-holder") as HTMLInputElement;
const expirationDate = document.getElementById("expiration-date") as HTMLInputElement;
const cvv = document.getElementById("cvv") as HTMLInputElement;
const form = document.getElementById("credit-form") as HTMLFormElement;

// function isValidDate(dateString: string): boolean {
//   const date = new Date(dateString);
//   return !isNaN(date.getTime());
// }


console.log(expirationDate.value);

function validateInfos(){
  const cardNumberString = cardNumber.value;
  const cvvString = cvv.value;
  
  if (cardNumberString.length !== 16){
    window.alert("Card Number is Invalid")
  } else if (cvvString.length !== 3){
    window.alert("CVV is Invalid")

    // hier später date volidierung hinzufügen
  } else {
    createClass();
  }

}

function createCreditcard(){
  console.log("hi")
}