
var content = {
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



  $.ajax({

         url: "http://quotes.rest/qod.json",
         dataType: "json",
         succes: function(data){
           var quote = content.contents.quotes[0].quote;
           var writer = content.contents.quotes[0].author;

           var element = document.getElementById("rest");
           var element2 = document.getElementById("rest2");
           element.innerText = quote;
           element2.innerHTML = writer;
           console.log(data);
         },
         error: function(error){


           var quote = content.contents.quotes[0].quote;
           var writer = content.contents.quotes[0].author;

           var element = document.getElementById("quote");
           var element2 = document.getElementById("author");
           element.innerText = quote;
           element2.innerHTML = writer;
         }
    });
