$(function() {

  function Player(turn) {
    this.turn = turn;
  };

  function Board() {
    this.playerX = new Player('X');
    this.playerO = new Player('O');
    this.$board = $('.box');
    this.$reset = $('#reset');
    this.currentPlayer = this.playerX;
    this.counter = 1;
  };

Board.prototype.nextPlayer = function() {
  if (this.counter % 2 === 0) {
    this.currentPlayer = this.playerX; 
    } else {
    this.currentPlayer = this.playerO;
  }
  this.counter += 1;
};

Board.prototype.init = function() {
  var _this = this;

  this.$board(function(event) {
    var box = event.target;
      if (box.innerHTML === '') {
        box.innerHTML == nextPlayer();
      }
  });

  this.currentPlayer();

    _this.nextPlayer();
  });

this.$reset.click(function(evnt) {
  $('.box').html('');
  $('.box').removeClass('X', 'O');
});

  $('#reset').click('reset')

};

var board = new Board();
board.init();
});