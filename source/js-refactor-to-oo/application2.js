/* Write your JS to modify the view here */
$(document).ready( function() {
  dice = new Dice();
  $('.add').on ('click', function () { dice.createDie() } );
  $('.roll').on ('click', function () { rollDice() } );
});

function Die(){
  this.value = 0;
  this.roll = function(){
    return Math.floor((Math.random()* 6)+1);
  }; 
}

function Dice(){
  this.diceCount = [];
  this.createDie = function() {
    die = new Die;
    this.diceCount.push(die);
    removeDice();
  };
}

function removeDice(){
  $('.die').remove();
}