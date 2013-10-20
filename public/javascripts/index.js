$(function(){
  console.log("I'm here!");
  var source   = $("#search-results-template").html();
  var template = Handlebars.compile(source);
  $results = $('#results')

  $('#search').on('keyup', function(e){
    if(e.keyCode === 13){
      // send the entered search term via AJAX to your /search endpoint.
      console.log("stuff!");
      var val = $(this).val()
      $.get('/search', {search : val}, function(data){ //take this data that's coming from the res.send and use DOM manipulation to render it 
        console.log(data)
        // $("#results").append('<p>'+data.desc+'</p>');
        //$("#results").append('<p>'+description+'</p>');   //use jquery methods before handlebars!
        var myHandlebarsData = {
          description:data
        }
        
        $results.html(template(myHandlebarsData))


        
      });
    }
  });
});