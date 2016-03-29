var SongList = Backbone.Collection.extend({

		model: SongModel,
		getChecked: function(){
			return this.where({checked:true});
		}
	});

var var songs = new SongList([
  	new SongModel({ image: 'https://www.google.ro/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwje1rmcl-bLAhXMWBQKHWW7Bz8QjRwIBw&url=http%3A%2F%2Fwww.gettyimages.ca%2F&psig=AFQjCNGDFEXX1HU2z7WP95zCUUP8SINynA&ust=1459350721609031t' , songTitle: "Shanana" , songAuthor: "Tito" , songLength: 90 , songListened: 100 })
  	]);
