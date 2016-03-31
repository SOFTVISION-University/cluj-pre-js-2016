const SongListItemView = Backbone.View.extend({
  tagName: 'div',
  className: 'song-item-view',
  template: _.template('<img src="<%= image %>"/><span class="name"><%= songTitle %></span><span class="description"><%= songAuthor%></span><span class="description"><%= songLength%></span><span class="description"><%= songListened%></span> '),
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});

export { SongListItemView };
