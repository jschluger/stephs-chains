var onC = function() {
    var r = Math.floor(Math.random() * 100000);
    $('body').append('<img id="money'+r+'" src="assets/100.jpeg" alt="money"> </img>');
    var im = $('#money'+r);
    im.css('position','fixed');
    im.css('top',$('#stephmoney').css('top') + Math.floor(Math.random() * 50)-25);
    im.css('left',$('#stephmoney').css('left') + Math.floor(Math.random() * 50)-25);
}
$('#stephmoney').click(onC);
