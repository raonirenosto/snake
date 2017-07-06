
class Screen {
  constructor(squares) {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.counterBoxHeight = 50;

    // square size in pixels
    this.squareSize = Math.trunc(this.windowWidth / squares)

    this.horizontalSquares = squares;
    this.verticalSquares = Math.trunc((this.windowHeight - this.counterBoxHeight)
    / this.squareSize);

    this.width = this.squareSize * this.horizontalSquares
    this.height = (this.squareSize * this.verticalSquares) + this.counterBoxHeight

    this.context = this.context;
    this.canv=document.getElementById("gc");
    this.context=this.canv.getContext("2d");

    this.canv.height = this.height;
    this.canv.width = this.width;
  }

  drawnBackground() {
    this.context.fillStyle="black";
    this.context.fillRect(0,0,this.width, this.height);
  }

  draw(snake, apple, counter) {
    this.drawnBackground();

    this.drawSnake();

    this.drawApple();

    this.drawCounter(counter);
  }

  drawSnake() {
    this.context.fillStyle="lime";
    for (let i =0; i<snake.positions.length; i++) {
      this.context.fillRect(
        // minus one because of snake logic begins from 1,
        // and plus one to make a border line
        (snake.positions[i].horizontal - 1) * this.squareSize  + 1,
        (snake.positions[i].vertical -1) * this.squareSize + 1,
        // minus one to centralize the green square on the black square
        this.squareSize -1,
        this.squareSize -1
      );
    }
  }

  drawApple() {
    this.context.fillStyle="red";
    this.context.fillRect(
      (apple.position.horizontal - 1) * this.squareSize, // minus one because of apple logic begins from 1
      (apple.position.vertical -1) * this.squareSize,
      this.squareSize,
      this.squareSize
    );
  }

  drawCounter(counter) {
    let verticalCounterPosition = this.verticalSquares * this.squareSize;

    // print black bottom
    this.context.fillStyle="grey";
    this.context.fillRect(
       1,
       verticalCounterPosition + 1,
       this.width - 2,
       this.counterBoxHeight - 2);

    this.context.fillStyle="white";
    this.context.font = "30px Arial";

    // centralize text on vertical
    let textPosition = verticalCounterPosition + 40
    this.context.fillText("Points:",10,textPosition);

    this.context.fillStyle="orange";
    this.context.font = "30px Arial";
    this.context.fillText(counter.value(),110,textPosition);
  }

  blinkSnakeHead(snake) {
    this.context.fillStyle=(this.context.fillStyle == "#ffa500")?"lime":"orange";
    this.context.fillRect(
      (snake.positions[0].horizontal - 1) * this.squareSize  + 1,
      (snake.positions[0].vertical -1) * this.squareSize + 1,
      this.squareSize -1,
      this.squareSize -1
    );
  }
}
