const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const casual = require('casual');

function tokenFromReq(req) {
  return req.headers['x-token'];
}

function stripGDriveBody(body) {
  let b = body.replace('gdata.io.handleScriptLoaded(', '');
  b = b.slice(0, -2);
  return b;
}

function initServer(repo) {
  const expressApp = express();

  function isAuth(req, res, next) {
    const token = tokenFromReq(req);

    if (token != null) {
      const user = repo.getUserWithToken(token);
      if (user != null) {
        return next();
      }
    }

    return res.status(403).send('Unauthorized');
  }

  expressApp.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  expressApp.use(bodyParser.json());

  expressApp.get('/playlists', (req, res) =>   {
    res.status(200).send(repo.playlists);
  });

  expressApp.get('/preferences', isAuth, (req, res) => {
    const token = tokenFromReq(req);
    const user = repo.getUserWithToken(token);

    res.status(200).send(JSON.stringify(user));
  });

  expressApp.get('/playlists/:id', (req, res) => {
    const result = repo.playlists.filter(playlist => playlist.id === req.params.id)[0];
    if (result == null) {
      res.status(404).send("Playlist not found");
      return;
    }
    res.status(200).send(result);
  });

  expressApp.post('/auth', (req, res) => {
    if (req.body == null || req.body.username == null || req.body.password == null) {
      res.status(400).send("Bad request");
      return;
    }

    const username = req.body.username;
    const password = req.body.password;
    const user = repo.getUserByUsername(username);

    if (user == null) {
      res.status(403).send('Unautorized');
      return;
    }

    const token = repo.createSession(user);
    console.log(`Created new session ${token}`);
    res.status(200).send(String(token));
  });

  expressApp.post('/register', (req, res) => {
    if (req.body == null || req.body.email == null || req.body.username == null || req.body.password == null) {
      res.status(400).send("Bad request");
      return;
    }
    console.log(`ACTION: create new session ${JSON.stringify(req.body)}`);
    res.status(200).send("Registration approval pending");
  });

  expressApp.post('/logout', (req, res) => {
    const token = tokenFromReq(req);

    if (token == null) {
      return res.status(400).send("Bad request");
    }

    repo.removeSession(token);
    res.status(201).send("OK");
  });

  expressApp.listen(3000, () => {
    console.log('server running on port 3000');
  });
}

class App {
  constructor(playlists, users) {
    if (playlists.constructor !== Array) {
      throw new Error('[class App] Incorrect constructor parameter for playlists');
    }
    if (users.constructor !== Array) {
      throw new Error('[class App] Incorrect constructor parameter for users');
    }

    this.playlists = playlists;
    this.users = users;
    this.sessions = {};
  }

  getUserWithToken(token) {
    return this.sessions[token];
  }

  getUserByUsername(username) {
    if (this.users.length > 0) {
      const match = this.users.filter(user => user['gsx$username']['$t'] === username)[0];

      if (match != null) {
        return match;
      }
    }

    return undefined;
  }

  removeSession(token) {
    this.sessions[token] = null;
  }

  createSession(user) {
    if (user == null) {
      throw new Error('[class App] incorrect parameter for createSession');
    }

    const token = +new Date();
    this.sessions[token] = user;

    return token;
  }
}

(function() {
    request('https://spreadsheets.google.com/feeds/list/1rlv-9lSYBvY9Do-KAof8vkG89iLnsGz1_-NpEm1tOe8/od6/public/values?alt=json-in-script', (err, resp, body) => {
      if (!err && resp.statusCode == 200) {
        console.log('songs read from google drive');

        body = stripGDriveBody(body);

        const songs = JSON.parse(body).feed.entry;

        // make sure an string ID is set and that is unique
        songs.forEach((song, index) => song.id = +new Date() + index);

        const playlists = [];
        const numberOFPlaylists = Math.random() * 10;

        let i = 0;
        while (i < numberOFPlaylists + 2) {
          playlists[i] = {
            id: i,
            title: casual.title,
            description: casual.text,
            imageLarge: "http://lorempixel.com/360/224/abstract",
            imageSmall: "http://lorempixel.com/157/135/abstract",
            songs: songs.filter(song => Math.random() > 0.5)
          };
          i++;
        }

        request('https://spreadsheets.google.com/feeds/list/1ElceH7F7GvHmxacRbPJ8uZJ3zXtxdKUeysFJnMwwyCw/od6/public/values?alt=json-in-script', (error, response, body) => {
          if (!error && response.statusCode == 200) {
            console.log('playlists read from google drive');

            body = stripGDriveBody(body);

            const users = JSON.parse(body).feed.entry;

            initServer(new App(playlists, users));

            return;
          }
        });
      }
    });
}());
