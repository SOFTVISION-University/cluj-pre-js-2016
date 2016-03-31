import Utils from '../utils.js';

const SongView = Backbone.View.extend({
  template: _.template($('#template-SongView').html()),
  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});

const SongsView = Backbone.View.extend({
  template: _.template($('#template-SongsView').html()),
  _nestedView: [],

  renderNestedView(view, el) {
    this._nestedView.push(view);
    el.append(view.el);
  },

  render() {
    this.$el.html(this.template());
    const that = this;
    const partEl = $(this.el.querySelector('#songs'));
    this.collection.forEach((model) => {
      const songview = new SongView({
        model: model
      });
      songview.render();
      that.renderNestedView(songview, partEl);
    });
    return this;
  },
  events: {
    'click #closeButton': 'closeView',
  },
  closeView() {
    Utils.slidePlayListOut(this.el);
    const that = this;
    setTimeout(() => {
      that.remove();
    }, 2000);
  },


});

export { SongView, SongsView };
