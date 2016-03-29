var SongCollectionView = Backbone.View.extend({
                render: function () {
                  var that = this;
                  this.collection.forEach(function(model) {
                      var songView = new SongView({
                        model: model
                      });
                      that.el.appendChild(songView.render().el);
                });
              }
            });
