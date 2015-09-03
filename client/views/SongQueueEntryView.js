// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      // click to dequeue a certain song
      // this.model.dequeue(this.model);
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
