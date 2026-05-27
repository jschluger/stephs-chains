$('#stephmoney').click(() =>
    var im = $('<img>', {
	id: 'money',
	src: 'assets/100.jpeg',
	alt: 'money'
    });
    im.css('position','fixed');
    im.css('top',$('#stephmoney').css('top') + Math.floor(Math.random() * 50)-25);
    im.css('left',$('#stephmoney').css('left') + Math.floor(Math.random() * 50)-25);
    $('body').append( im );
    
);
