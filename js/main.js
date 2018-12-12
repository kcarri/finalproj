$(document).ready(function() {

    $('#btn-animate').on('click',function() {
        $('#hinged').addClass('animated hinge')
        $('#hinged2').addClass('animated hinge delay-2s')
        $('#hinged3').addClass('animated hinge delay-3s')
    })


    setTimeout(function() {
        $('#rockedout').fadeOut(200);
    }, 900);

    function on() {
        document.getElementById("overlay").style.display = "block";
      }

});

