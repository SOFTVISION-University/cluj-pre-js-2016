Refactor the application as follows:

1. Make SearchService a singleton
2. Make the Playlist objects observable. When the songs are added to a playlist, emit an event, subscribe to that event in some other component and redraw the playlist if it’s contents is currently being displayed.
3. Create a ModelFactory class that creates Song or Playlist classes from  the JSON data received from the server
   Eg ModelFactory.create(type, data)
