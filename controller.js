function keyPush(evt) {
  // We need to check if the snake
  // is inverting its tail.
  // The snake can't crawl back.
  switch(evt.keyCode) {
    case 37:
      if (snake.invertingTail('left'))
        return
      snake.pointLeft();
      break;
    case 38:
      if (snake.invertingTail('up'))
        return
      snake.pointUp();
      break;
    case 39:
      if (snake.invertingTail('right'))
        return
      snake.pointRight();
      break;
    case 40:
      if (snake.invertingTail('down'))
        return
      snake.pointDown();
      break;
  }
}
