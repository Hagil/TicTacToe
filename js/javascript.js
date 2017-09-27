console.log('loaded')

var counter = 0;
var current_player = true;
var player1 = 'cross',
  player2 = 'nought',
  current_name;
var token_1 = 'X',
  token_2 = 'O',
  current_token = 'X'
var square = ['sA', 'sB', 'sC', 'sD', 'sE', 'sF', 'sG', 'sH', 'sI'];


$(document).ready(setup);

function setup() {
  console.log('Inside setup');
  $('div[id^=s]').click(square_clicked);
  $('#reset').click(reset);
}

function square_clicked() {
  console.log($(this).attr('id'));
  var square = $(this).attr('id');
  // check values - 3 in a row?
  check_values(this);
  // swap player
  swap_player();
  //swap_token();
  //increase counter is no winner
  //increase_counter();
  counter++;
  console.log('counter ' + counter);

}

function reset() {
  console.log('resetting gameboard');
  //  square_counter = 0;
  //current_player = 'cross';
}


function check_values(square) {
  if (current_player == true) {
    $(square).addClass('Xclicked');
  } else {
    $(square).addClass('Oclicked');
  }
  $(square).text(current_token);
    $(square).off('click');
  console.log('checking values');

}

function swap_player() {
  console.log('swaps players AND token');
  current_player = !current_player;
  current_name = current_player ? player1 : player2;
  current_token = current_player ? 'X' : 'O';
  console.log(current_name, current_token);
}

function increase_counter() {
  console.log('counter is now:' + counter);
  for (var square_counter = 0; square_counter < square.length; square_counter++) {

  }
}



//set up gameboard ok

//start game ok

//X = cross, O = nought ok

//X starts with click a square on board
//check if winning array has been satisfied
//if not, change to O

//O click a square on board
//check if winning array has been satisfied
//if not, change to back to X

//Continue above until square_counter = 9

//check if there is a winning array


//if X wins change score_counter for X
//if O wins change score_counter for O
//click to reset gameboard
//keep score_counter without resetting
//logic tested to this point

//if square_counter = 9 without winning array, then game = draw
//no change to score_counter

//click reset to reset gameboard
//keep score_counter without resetting
