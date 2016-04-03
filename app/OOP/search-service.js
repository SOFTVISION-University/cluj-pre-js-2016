function SearchService() {
}
// SearchService singleton
SearchService._instance = null;
SearchService.getInstance = function getInstance() {
  if (SearchService._instance === null) {
    SearchService._instance = new SearchService();
  }
  return SearchService._instance;
};

SearchService.prototype.search = function search() {

};
