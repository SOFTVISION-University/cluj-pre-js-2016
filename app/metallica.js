$(document).ready(function(){
  
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=metallica",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
            blurb.find('sup').remove();
            blurb.find('.mw-ext-cite-error').remove();
            $('#article').html($(blurb).find('p'));
        },
        error: function (errorMessage) {
        }
    });
});
