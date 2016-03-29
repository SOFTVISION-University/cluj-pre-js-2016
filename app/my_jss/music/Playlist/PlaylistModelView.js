var PlaylistModelView = Backbone.View.extend({
 template : function(options,selector){
     var templateText = document.getElementById(selector).innerText;
     var compiled = _.template(templateText);

     if (options != null) {
       return compiled(options);
     }
     
     return compiled();
 },
 render : function(){
   this.$el.html(this.template(this.model.attributes,'template-PlaylistBig'));

   var songCollection = new SongsCollectionView({
     //el :
   });


 }
});
