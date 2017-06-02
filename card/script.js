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
  } );

 
        
