$(document).ready(function(){
  $("input").keypress(function(event){
  if(event.keyCode===13)
  generate();
});
});


function generate()
{

var title=document.getElementById('input').value;
if(title==="")
{
  alert("Enter something to search");
}
else {

$("#first").prop("class","hidden");
var url="https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search="+title+"&limit=10&namespace=0&format=json";
$.getJSON(url,function(json){
  console.log(json);
  json=JSON.stringify(json);
  json=JSON.parse(json);
  console.log(json[0]);
  $(".display-results").prop("class","display-results");
  if(json[1].length===0)
  {
    
    $(".search-results").append("<p class=\"text-center \" >OOPS , there were no articles matching your search... :-( </p>");
  }
  else{
    
  for(var i=0;i<10;i++)
  {
    var rtitle=json[1][i];
    var atitle=rtitle.replace(/ /g,'_');
    var desc=json[2][i];
    $(".search-results").append('<a target="_blank" href="https://en.wikipedia.org/wiki/'+rtitle+'"><div class="search-items text-center "><h6>'+rtitle+'</h6>'+'<p>'+desc+'</p> </div></a>');
  }
  }
  });
}
}
