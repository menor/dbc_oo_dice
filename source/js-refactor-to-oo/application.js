$(document).ready(function() {
  $('#roller button.add').on('click', function(){ createDie(); });
  $('#roller button.roll').on('click', function(){ rollDice(); });
});


function Die() {
  this.value = 0;
  this.template = "<div class='die'>" + this.value + "</div>";
  this.roll = function(){
    return Math.floor((Math.random()* 6)+1);
  }
}

function createDie() {
  die = new Die
  $('.dice').append(die.template)
};

function rollDice() {
  $('.die').each(function(index, value){
    $(this).text(die.roll) } )
}