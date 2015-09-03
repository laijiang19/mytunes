// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    // var count = 0;
    // var cidArr = [];

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    params.library.on('play', function(song){
      // added event trigger for change:currentSong for when the same song is queued more than once
      // this.trigger('change:currentSong', this);
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      // song.set('cid') = 'c' + count;
      // idArr.push(song.get('cid'); 
      // count++;
      // bugs: deleting cid won't remove it from the colleciton anymore
      // however conjuring up a unique id will only remove the same song once
      delete song.cid;
      this.get('songQueue').push(song);
      if (this.get('songQueue').length === 1) {
          this.get('songQueue').play();
      }
    }, this);

    params.library.on('dequeue', function(song){
      // remove by id instead of shifting; still has bugs if object id is modified
      // this.get('songQueue').remove(cidArr.shift());

      // modified to have option to remove a queued song 
      // if (song) {
      //   console.log('fired');
      //   this.get('songQueue').remove(song.cid);
      // }
      // else {
        this.get('songQueue').shift();
        // move update trigger here, otherwise songQueue collection not updated before sending signal
        // this.trigger('update', this);
        this.get('songQueue').play();
      // }
    }, this);
  }

});
