// var promise = $.ajax({
//     dataType: "json",
//     url: 'http://quotes.rest/qod.json',
//     //data: {foo: 'bar'}
// }).done(function(results) {
//   console.log(results);
// }).fail(function(error) {
//   console.log("error");
// });
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
};
var divName = document.getElementById("divForQuote");
var parag = document.getElementById("replaceQuote");
parag.innerHTML="";

var jqxhr = $.getJSON( "http://quotes.rest/qod.json", function(data) {
  console.log( "success" );

})
  .done(function(data) {
    parag.innerHTML=data.contents.quotes[0].quote;
    console.log( data );
  })
  .fail(function( req, status, err ) {
    if(jqxhr.status == 429)
      {
        parag.innerHTML=obj.contents.quotes[0].quote;
        console.log(obj.contents.quotes[0].quote);
        console.log( 'something went wrong', status, err );}

  });
