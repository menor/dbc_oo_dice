$(document).ready(function() {
  controller = new Controller;
});

// Model
function Die() {
  this.value = 0;

  this.roll = function(){
  return Math.floor((Math.random()* 6)+1);
  };
}

// View
function View(dice){  
  this.displayDie = function(dice) {
  $('.dice').append('<div class="die">'+ dice.value +'</div>');
  };

  this.updateDie = function(die, new_value) {
    debugger;
    $('.die').html(new_value);
  }

}

// Controller
function Controller(){
  this.dice = [];
  this.view = new View;
  var that = this;
  $('#roller button.add').on('click', function() {
    new_die = new Die();
    that.dice.push(new_die);
    // new_view = new View(new_die);
    that.view.displayDie(new_die);
  });

  $('#roller button.roll').on('click', function() {
    $.each(that.dice, function(index, die){
      that.view.updateDie(die, die.roll());
    });
  });
    // $('.die').each(index, die){
    //   die.roll
    // };
    // new_view = new View(new_die);
    // new_view.displayDie(new_die);
  // });
}

 // $('#roller button.add').on('click', function() {
 //    console.log("WAT")
 //    $('.dice').append('<div class="die">0</div>');
 //  });

 //  $('#roller button.roll').on('click', function() {
 //    $('.die').each(function(k, die) {
 //      var value = Math.floor((Math.random()*6)+1);
 //      $(die).text(value);
 //    });
 //  });