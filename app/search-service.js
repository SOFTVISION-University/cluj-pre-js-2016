function SearchService(){

}

//SearchService singleton
SearchService._instance = null;
SearchService.getInstance = function(){
  if(SearchService._instance === null){
    SearchService._instance = new SearchService();

  }
    return SearchService._instance;
}
