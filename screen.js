class Screen {
  constructor(squares, squareSize, context) {
    this.height = squares * squareSize;
    this.width = this.height;
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
    this.context.fillRect(0,0,this.height,this.width);
  }

  draw(snake, apple) {
    this.drawnBackground();

    this.context.fillStyle="lime";
    for (let i =0; i<snake.positions.length; i++) {
      this.context.fillRect(
        (snake.positions[i].horizontal - 1) * this.squareSize, // minus one because of snake logic begins from 1
        (snake.positions[i].vertical -1) * this.squareSize,
        this.squareSize,
        this.squareSize
      );
    }

    this.context.fillStyle="red";
    this.context.fillRect(
      (apple.position.horizontal - 1) * this.squareSize, // minus one because of apple logic begins from 1
      (apple.position.vertical -1) * this.squareSize,
      this.squareSize,
      this.squareSize
    );
  }
}
