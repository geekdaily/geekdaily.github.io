// http://stackoverflow.com/questions/4566137/show-more-show-less-with-jquery
$('#more-less-code-block').css({height:'20px', overflow:'hidden'});
$('#more-less-code-block').on('click', function() {
    var $this = $(this);
    if ($this.data('open')) {
        $this.animate({height:'20px'});
        $this.data('open', 0);

    }
    else {
        $this.animate({height:'100%'});
        $this.data('open', 1);
    }
});
