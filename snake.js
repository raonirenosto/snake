class Snake {
  constructor(snakeTail, verticalSquares, horizontalSquares) {
    this.tail = snakeTail;
    this.trail = [];
    this.verticalSquares = verticalSquares;
    this.horizontalSquares = horizontalSquares;
    this.vertical = 0;
    this.horizontal = -1; // start going left
    this.buildTail();
  }

  buildTail() {
    // start in the middle of screen
    let middleOfScreenVertical = Math.trunc(this.verticalSquares / 2);
    let middleOfScreenHorizontal = Math.trunc(this.horizontalSquares / 2);

    for (let i=0; i<this.tail; i++) {
      this.trail.push({
        vertical: middleOfScreenVertical,
        horizontal: middleOfScreenHorizontal + i
      })
    }
  }

  get positions() {
    return this.trail;
  }

  crawl() {
    this.trail.unshift({
      vertical: this.trail[0].vertical + this.vertical,
      horizontal: this.trail[0].horizontal + this.horizontal
    });
    this.trail.pop();
    this.checkEdgeLimits();
  }

  checkEdgeLimits() {
    for (let i=0; i<this.trail.length; i++) {
      // when snake overlap the left edge
      if (this.trail[i].horizontal < 1) {
        this.trail[i].horizontal = this.horizontalSquares;
      }
      // when snake overlap the right edge
      if (this.trail[i].horizontal > this.horizontalSquares) {
        this.trail[i].horizontal = 1;
      }

      // when snake overlap the top edge
      if (this.trail[i].vertical < 1) {
        this.trail[i].vertical = this.verticalSquares;
      }

      // when snake overlap the bottom edge
      if (this.trail[i].vertical > this.verticalSquares) {
        this.trail[i].vertical = 1;
      }
    }
  }

  pointUp() {
    this.vertical = -1;
    this.horizontal = 0;
  }

  pointDown() {
    this.vertical = +1;
    this.horizontal = 0;
  }

  pointLeft() {
    this.vertical = 0;
    this.horizontal = -1;
  }

  pointRight() {
    this.vertical = 0;
    this.horizontal = +1;;
  }

  invertingTail(futureDirection) {
    // going left
    if (this.horizontal < 0 && futureDirection == 'right')
      return true;

    // going right
    if (this.horizontal > 0 && futureDirection == 'left')
      return true;

    // going up
    if (this.vertical < 0 && futureDirection == 'down')
      return true;

    // going down
    if (this.vertical > 0 && futureDirection == 'up')
      return true;

    return false;
  }

  ateOwnTail() {
    for (let i=0; i<this.trail.length; i++) {
      for (let z=0; z<this.trail.length; z++) {
        if (z!=i) {
          if ((this.trail[i].horizontal == this.trail[z].horizontal) &&
            (this.trail[i].vertical == this.trail[z].vertical)) {
            return true
          }
        }
      }
    }
    return false;
  }

  ateApple(apple) {
    return this.overlapsApple(apple);
  }

  growTail() {
    this.trail.push({
      vertical: this.trail[this.trail.length - 1].vertical + this.vertical,
      horizontal: this.trail[this.trail.length - 1].horizontal + this.horizontal
    });
  }

  overlapsApple(apple) {
    for (let i=0; i<this.trail.length; i++) {
      // when a snake tail part overlaps the apple
      if ((this.trail[i].horizontal == apple.position.horizontal) &&
        (this.trail[i].vertical == apple.position.vertical)) {
        return true
      }
    }
    return false;
  }
}
