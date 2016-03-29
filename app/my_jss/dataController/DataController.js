function DataController() {
  this.data = [];
  this.URL_LOCATION = "";
  this.SAVE_NAME = "";
}

// return data as array
DataController.prototype.returnData = function () {

  this.data = JSON.parse(this.URL_LOCATION);
  this.updateData(this.SAVE_NAME);
  return this.data;
};
/// set url location of instance of data controller
DataController.prototype.setUrlLocation = function(url) {
  this.URL_LOCATION = url;
};
// set name save of instance of data controller
DataController.prototype.setSaveName = function(name) {
  this.SAVE_NAME = name;
};


// save data as object to this.data array;
DataController.prototype.saveData = function(data) {
  this.data.push(data);
  this.updateData(SAVE_NAME);
  /// observer to push data into location

};

DataController.prototype.removeData = function(data) {

  var indexOfData = this.data.indexOf(data);
  this.data = this.data.splice(indexOfData, 1);
    /// observer to push data into location
};

DataController.prototype.updateData = function(name) {

   localStorage.setItem(name, this.data);

};


//// FUNCTION TO CHECK LOCAL STORAGE

function localStorageExistance(){
  if(localStorage.getItem("users"))
  {
    users = localStorage.getItem("users");
  }
  else {
    users = [];
  }
}
