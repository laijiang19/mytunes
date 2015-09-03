// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    // added playcount to the property of song
    // this.set('playCount', 0);
  },

  play: function(){
    this.trigger('update', this);
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    // increase playCount everytime enqueue is called
    // this.set('playCount', this.get('playCount') + 1);
    this.trigger('enqueue', this);
    this.trigger('update', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
    this.trigger('update', this);
  }
  
});
