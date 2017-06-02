// $(document).ready(function () {
//     setTimeout(function(){
//         $('.mycard').show();
//    }, 19140);
// });


$(document).ready(function() {
    $(".mycard").hide(); 
document.getElementById('video').addEventListener("timeupdate", function() {
    if(this.currentTime > 19) {
$(".mycard").show()
    }
});
});