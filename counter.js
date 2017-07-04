class Counter {
  constructor(pointsPerApple) {
    this.counter = 0;
    this.pointsPerApple = pointsPerApple;
  }

  value() {
    return this.counter;
  }

  plusOne() {
    this.counter = this.counter + this.pointsPerApple;
  }

  reset() {
    this.counter = 0;
  }
}
