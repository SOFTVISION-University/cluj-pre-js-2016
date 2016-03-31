var SongView = Backbone.View.extend({
        template: function(values){
          var templateText = document.querySelector("#song-item").innerText;
          var compiled = _.template(templateText);
          if (values !== null) {
  					return compiled(values);
  				}
          return compiled();
        },
      render: function () {
        this.$el.append(this.template(this.model));
        return this;
      }
    });
