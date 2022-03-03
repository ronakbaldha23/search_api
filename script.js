function hndlr(res) {
  try {
    document.getElementById('content').innerHTML += `<div style="color: grey;">About ${res.searchInformation.formattedTotalResults} results
    (${res.searchInformation.formattedSearchTime} seconds)`;
var newhtml ="";
    for (var i = 0; i < res.items.length; i++) {
      if('cse_thumbnail' in res.items[i].pagemap){
        var image = res.items[i].pagemap.cse_thumbnail[0].src;
      }else{
        var image = "img/en.wikipedia.org.ico";
      }

      newhtml += '<div class="result results_links results_links_deep web-result "> <div class="links_main links_deep result__body"> <h2 class="result__title"> <a rel="nofollow" class="result__a" href="'+res.items[i].link+'">'+res.items[i].title+'</a></h2> <div class="result__extras"> <div class="result__extras__url"> <span class="result__icon"> <a rel="nofollow" href="'+res.items[i].link+'"> <img class="result__icon__img" width="16" height="16" alt="" src="'+image+'"/> </a> </span> <a class="result__url" href="'+res.items[i].link+'"> '+res.items[i].link+' </a> </div></div><a class="result__snippet" href="'+res.items[i].link+'">'+res.items[i].htmlSnippet+'</a> <div class="clear"></div></div></div>';
    }
    $("#content").html(newhtml);
   } catch(error) {
    document.getElementById('content').innerHTML = '';
  }

}


console.log("test");

function submit () {
    
 document.getElementById('content').innerHTML = '';
  var val = document.getElementById('search_form_input_homepage').value;
  var newElement = document.createElement('script');
  newElement.src =
  `https://www.googleapis.com/customsearch/v1?key=AIzaSyA23__KQ-N_F1ECYC6wRCUqnUPh5bWp-5A&cx=partner-pub-3853029306847841:xz1zltlp4uh&q=${val}&callback=hndlr`;
 newElement.id = "mainscript";
 document.body.appendChild(newElement);
 return false;
}

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        submit ();
    }
});