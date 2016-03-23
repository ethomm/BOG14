$(document).ready(function(){
	
var jqxhr = $.getJSON( "http://localhost:3000/annotations/1.json", function() {
  console.log( "success" );
})
  .done(function() {
    console.log( "second success" );
    
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });
 
// Perform other work here ...
 
// Set another completion function for the request above
jqxhr.complete(function() {
  console.log( "second complete" );
});

console.log(jqxhr.body);

});

