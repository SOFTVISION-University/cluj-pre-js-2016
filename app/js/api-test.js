const objJson = {
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

// var objj =  document.getElementById("moto");

  $.getJSON( 'http://quotes.rest/qod.json' , function(data){
    console.log(data);
  })
    .done(function( data ) {

        // $( "<p>" ).attr( data.contents.quotes[0].quote ).appendTo( "#moto" );
        document.getElementById("moto").innerHTML = data.contents.quotes[0].quote;
         console.log( "success" );
      // })
    })
      .fail(function() {
          document.getElementById("moto").innerHTML = objJson.contents.quotes[0].quote;
      console.log( "error api" );
    });
