var SongView = Backbone.View.extend({
  template: _.template( $("#template-SongView").html() ),
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});

var SongsView = Backbone.View.extend({
  template: _.template( $("#template-SongsView").html() ),
  _nestedView: [],

  renderNestedView: function(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },

  render: function () {
    this.$el.html(this.template());
    var that = this;
    var partEl = $(this.el.querySelector('#songs'));
    this.collection.forEach(function(model) {
        var songview = new SongView({
          model: model
        });
        songview.render();
        that.renderNestedView(songview, partEl);
    });
    return this;
    },
    events:{
      'click #closeButton' : 'closeView'
    },
    closeView: function(){
      slidePlayListOut(this.el);
      var that = this;
      setTimeout(function(){
        that.remove();
      },2000);
    }

});
