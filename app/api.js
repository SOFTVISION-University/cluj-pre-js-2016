var text = document.getElementById( 'header-text' ) ;
var metallica = document.getElementById('footer') ;
var obj = {
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

var jqxhr = $.getJSON( "http://quotes.rest/qod.json", function( ) {
})
  .done( function (  ) {
    text.innerHTML = obj.contents.quotes[0].quote ;
  })
  .fail(function (  ) {
    text.innerHTML = obj.contents.quotes[0].quote ;
  })

  $.ajax({
      url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=metallica",
      type: "GET",
      dataType: "jsonp",
      success: function ( data ) {
        metallica.innerHTML = data.query.pages["18787"].extract;
      },
      error: function ( xhr, ajaxOptions, thrownError ) {
          metallica.innerHTML = "Error" ;
      }
  });
