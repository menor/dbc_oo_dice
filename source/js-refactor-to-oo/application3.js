// Application Setup
$(function() {
  var eventingSelectors = {
    dieActuatorSelector: ".add",
    rollActuatorSelector: ".roll"
  };

  DiceApp.view = new DiceApp.View({
    diceDivSelector: ".dice"
  });

  DiceApp.controller = new DiceApp.Controller({ view: DiceApp.view });
  new DiceApp.Binder(eventingSelectors, DiceApp.controller).bind();
  DiceApp.view.eventingSelectors = eventingSelectors;
});

// MODEL
var DiceApp = {};

function Die() {
  this.side = 0;
};

Die.prototype = {
  roll: function(){
    this.side = Math.floor(Math.random() * 6 + 1);
  }
};

function createDie(){
  return new Die();
};


// BINDER

DiceApp.Binder = function(targets, controller) {
  this.targets = targets;
  this.controller = controller;
}

DiceApp.Binder.prototype = {
  bind: function() {
          this.bindDieActuator();
          this.bindRollActuator();
        },

  bindDieActuator: function() {
                          var controller = this.controller,
                            sel = this.targets.dieActuatorSelector;

                          $(sel).on('click',  function(e){
                            controller.dieActuatorEvent(e);
                          });
                         },

  bindRollActuator: function() {
                          var controller = this.controller,
                            sel = this.targets.rollActuatorSelector;

                          $(sel).on('click',  function(e){
                            controller.rollActuatorEvent(e);
                          });
                        }
}

// CONTROLLER
DiceApp.Controller = function(config) {
  this.view = config.view;
};

DiceApp.Controller.prototype = {
  dieActuatorEvent: function(e) {
                        this.createDie();
                        this.view.update(this);
                      },

  rollActuatorEvent: function(e) {
                       this.die.roll();
                       this.view.update(this);
                      }
};

// VIEW
DiceApp.View = function(opts) {
  this.opts = opts;
};

DiceApp.View.prototype = {

  update: function(dataSource) {
            this.updateDie(dataSource);
            if (dataSource.die) {
              this.updateAgeCount(dataSource);
              this.updateFruitCount(dataSource);
              this.updateFruitImages(dataSource);
            }
          },

  updateFruitImages: function(dataSource) {
                       $(this.opts.orangesImagesContainer).empty();
                       for (var i = 1; i <= dataSource.tree.orangeCount; i++) {
                         $(this.opts.orangesImagesContainer).append(this.ORANGE_IMG_HTML);
                       }
                     },

  updateFruitCount: function(dataSource) {
                    $(this.opts.fruitCountDisplaySelector).text(dataSource.tree.orangeCount);
                    },

  updateAgeCount: function(dataSource) {
                    $(this.opts.ageDisplaySelector).text(dataSource.tree.age);
                  },

  updateTreeImage: function(dataSource) {
                     if (dataSource.tree) {
                       $(this.eventingSelectors.plantActuatorSelector).attr('disabled', 'disabled');
                       $(this.opts.treeDivSelector).show();
                     } else {
                       $(this.eventingSelectors.plantActuatorSelector).removeAttr('disabled');
                       $(this.opts.treeDivSelector).hide();
                     }
                   }
};
