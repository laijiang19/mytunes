// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  }, 

  play: function(){
    this.at(0).play();
  }

});

