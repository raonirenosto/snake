class Apple {

  constructor(squares) {
    this.squares = squares;
    this.vertical = 0;
    this.horizontal = 0;
  }

  sortPosition() {
    this.vertical = between(1, this.squares);
    this.horizontal = between(1, this.squares);
  }

  get position() {
    return {
      vertical: this.vertical,
      horizontal: this.horizontal
    }
  }
}
