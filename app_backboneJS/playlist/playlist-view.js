  var PlaylistView = Backbone.View.extend({

    tagName: 'div',
    className: 'playlist-view',
    template: function() {
      var fn = _.template($("script#playlist-item-view").html());
      return fn.apply(this, arguments);
    },
    // template: _.template('<img src="<%= imageLarge %>"/><h3 class="name"><%= title %></h3><span class="description"><%= description%></span><div class="playlist-button"><button type="submit">Explore playlist</button>	</div> '),
    events:{
      "click #explore-list-button":"openListOfSongs"
    },
    render: function () {
      this.$el.html(this.template(this.model.attributes));
      return this;
    },
    openListOfSongs:function(){
      alert("You clicked");
    }
  });
