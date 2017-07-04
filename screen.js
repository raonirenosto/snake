class Screen {
  constructor(squares, squareSize, context) {
    this.counterBoxHeight = 50;
    this.height = (squares * squareSize) + this.counterBoxHeight;
    this.width = (squares * squareSize);
    this.squares = squares;
    this.squareSize = squareSize;

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

    this.context.fillStyle="red";
    this.context.fillRect(
      (apple.position.horizontal - 1) * this.squareSize, // minus one because of apple logic begins from 1
      (apple.position.vertical -1) * this.squareSize,
      this.squareSize,
      this.squareSize
    );

    this.drawCounter(counter);
  }

  drawCounter(counter) {
    let verticalCounterPosition = this.squares * this.squareSize;

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
}
