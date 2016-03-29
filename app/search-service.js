function SearchService(playlist){
  var songsList = playlist.reduce()
}

//SearchService singleton
SearchService._instance = null;
SearchService.getInstance = function(){
  if(SearchService._instance === null){
    SearchService._instance = new SearchService();

  }
    return SearchService._instance;
}

SearchService.prototype.search = function(song){

}
