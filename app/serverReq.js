
function request_from_server(){
var json = {
    "success": {
        "total": 1
    },
    "contents": {
        "quotes": [
            {
                "quote": "Be not afraid of greatness. Some are born great, some achieve greatness, and some have greatness thrust upon 'em....",
                "length": "116",
                "author": "William Shakespeare",
                "tags": [
                    "inspire"
                ],
                "category": "inspire",
                "date": "2016-03-28",
                "title": "Inspiring Quote of the day",
                "background": "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg",
                "id": "FG7_PlYnhPFaWL79P5076QeF"
            }
        ]
    }
};



  var promise1 = new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();

    request.open('GET', 'http://quotes.rest/qod.json');
    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(request.statusText);
      }
    };

    request.send();
  });


  promise1.then(function(data) {
    document.getElementById('span_search1').innerHTML = data.contents.quotes[0].quote;
  });
  promise1.catch( function(data){

    document.getElementById('span_search1').innerHTML =json.contents.quotes[0].quote;

  });

  var promise2 = $.ajax( {
    url: "https://en.wikipedia.org//w/api.php?action=query&format=json&prop=pageimages%7Cextracts&exintro=&explaintext=&titles=metallica",
    jsonp: "callback",
    dataType: 'jsonp',
    data: {
      action: "query",
      list: "search",
      srsearch: "javascript",
      format: "json"
    },
    xhrFields: { withCredentials: true }


  });


  promise2.done(function(response) {
    document.getElementById('song_form_wiki').innerHTML =
                     response.query.pages['18787'].extract;
    img_link = response.query.pages['18787'].thumbnail.source;
    var img = document.createElement("img");
    img_link = img_link.split('50')[0] + '400' + img_link.split('50')[1];
    img.src = img_link;

    var src = document.getElementById("photo_form_wiki");
    src.appendChild(img);

  });
  promise2.fail(function(val){console.log(val);});

  }
