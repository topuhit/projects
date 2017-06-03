$(document).ready(function() {
    $(".mycard").hide(); 
document.getElementById('video').addEventListener("timeupdate", function() {
    if(this.currentTime > 18.900) {
$(".mycard").show()
    }
});
});

$(document).ready(function(){
	   $("#column").hide();
	   $("#about").click(function(){
        $("#column").toggle();
 
        
    });
});

$(document).ready(function(){
	   $("#close").click(function(){
	   	$("#column").hide();
	   });
	});

  $( function() {
    $( "#draggable" ).draggable();
      $( "#column" ).draggable();
      $( "#about" ).draggable();
  } );


$(document).on('click', function (e) {
    if ($(e.target).closest("#about").length === 0) {
        $("#column").hide();
    }
});
