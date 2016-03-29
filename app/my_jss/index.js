
function loginFunction(){
  window.location.href = "landing_page.html";
}
// var serverObject = {
//     "success": {
//         "total": 1
//     },
//     "contents": {
//         "quotes": [
//             {
//                 "quote": "Be not afraid of greatness. Some are born great, some achieve greatness, and some have greatness thrust upon 'em....",
//                 "length": "116",
//                 "author": "William Shakespeare",
//                 "tags": [
//                     "inspire"
//                 ],
//                 "category": "inspire",
//                 "date": "2016-03-28",
//                 "title": "Inspiring Quote of the day",
//                 "background": "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg",
//                 "id": "FG7_PlYnhPFaWL79P5076QeF"
//             }
//         ]
//     }
// };
//
// var pageElement = document.getElementById('bringInfo');
// var textElement = document.getElementById('updateText');
//
//
//     $.ajax({
//       url: "http://quotes.rest/qod.json",
//       type: "GET",
//       dataType: "json",
//       success: function (result) {
//         var objectReceived = JSON.parse(serverObject);
//         console.log( objectReceived);
//       },
//       error: function (xhr, ajaxOptions, thrownError) {
//        pageElement.innerHTML = "Too Many Requests: Rate limit of 10 requests per hour exceeded. Please wait for 49 minutes and 8 seconds.";
//       }
//   });
//
//   $.ajax({
//     url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Metallica&exintro=1&explaintext=1",
//     type: "GET",
//     dataType: "jsonp",
//     success: function (result) {
//       textElement.innerHTML = result.query.pages["18787"].extract;
//     },
//     error: function (xhr, ajaxOptions, thrownError) {
//         console.log("EROR");
//     }
// });
//
// $.ajax({
//   url: "https://en.wikipedia.org/wiki/Metallica#/media/File:Metallica_London_2008-09-15_Kirk_and_James.jpg",
//   type: "GET",
//   dataType: "image",
//   success: function (result) {
//     console.log(result);
//   //  textElement.style.backgroundImage =
//   },
//   error: function (xhr, ajaxOptions, thrownError) {
//       console.log("EROR2");
//   }
// });




// var urlServer = "http://quotes.rest/qod.json";
// fetch("http://quotes.rest/qod.json")
//   .then(function(response){
//     return respone.json();
// })
//   .then(function(data){
//     console.log(data);
//   })
//   .catch(function(error){
//     pageElement.innerHTML = "Too Many Requests: Rate limit of 10 requests per hour exceeded. Please wait for 49 minutes and 8 seconds.";
//   });
