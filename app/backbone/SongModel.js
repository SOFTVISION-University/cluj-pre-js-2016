var SongModel = Backbone.Model.extend ({

  defaults : {
    image : "../core/assets/2015-best-music.png" ,
    songTitle : "love love enemies love" ,
    songAuthor : "Smiley" ,
    songLength : 74 ,
    songListened : 82 ,
    checked : false
  } ,
  toggle: function(){
			this.set('checked', !this.get('checked'));
}) ;
