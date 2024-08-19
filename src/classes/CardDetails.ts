class CardDetails {
  _cardNumber: number = 0;
  _fullName: string = "";
  _expireDate: Date;
  _cvv: number = 0;

  constructor(
    cardNumber: number,
    fullName: string,
    expireDate: Date,
    cvv: number
  ) {
    this._cardNumber = cardNumber;
    this._fullName = fullName;
    this._expireDate = expireDate;
    this._cvv = cvv;
  }
}
