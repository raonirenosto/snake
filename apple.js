class Apple {

  constructor(verticalSquares, horizontalSquares) {
    this.verticalSquares = verticalSquares;
    this.horizontalSquares = horizontalSquares;
    this.vertical = 0;
    this.horizontal = 0;
  }

  sortPosition() {
    this.vertical = between(1, this.verticalSquares);
    this.horizontal = between(1, this.horizontalSquares);
  }

  get position() {
    return {
      vertical: this.vertical,
      horizontal: this.horizontal
    }
  }
}
