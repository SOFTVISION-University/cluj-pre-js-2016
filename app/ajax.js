//Primul exercitiu
var Quotes=
  {
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
  }


var myElement= Quotes.contents.quotes[0].quote;
console.log(Quotes.contents.quotes[0].quote);

var element= document.getElementById('promise');

  $.ajax({
    url:  "http://quotes.rest/qod.json",
    success: function(result){
    element.innerHTML = myElement;
    },
    error: function(error){
      element.innerHTML = myElement;
    }
  });

//Al doilea exercitiu

var myparagraph= document.getElementById('metalica');
console.log(myparagraph);
var band;

 $.ajax({
   url:"https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=metallica",
   jsonp: "callback",
   dataType: "jsonp",
   data: {
        action: "query",
        list: "search",
        format: "json",
        srsearch: "javascript"
      },

  success:function(result){
  band= result.query.pages["18787"].extract;
  console.log(band);
  myparagraph.innerHTML = band;
  },
  error: function(error){
  myparagraph.innerHTML = "This is not loading, sorry!";
  }

 });
