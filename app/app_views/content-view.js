var ContentView = Backbone.View.extend({
  initialize: function(){
    this.render();
  },
  render: function(){
    // Compile the template using underscore
    var template = _.template( $("#template-ContentView").html(), {} );
    // Load the compiled HTML into the Backbone "el"
    this.$el.html( template );
  }
});
