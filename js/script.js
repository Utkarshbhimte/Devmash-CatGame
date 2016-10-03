$(document).ready(function() {
    var height = $('#pic-wrap').height();
    var width = $('#pic-wrap').width();
    console.log(height, width);

    $('#pic-wrap').on('mouseover', function(event) {
      $('#pic-wrap').css({
        'left': Math.random() * (90) + '%',
        'top': Math.random() * (80) + '%'
      });
    });

    $('pic-wrap').on('click', function(event) {
      $('#win-wrap').toggle();

    });
});
