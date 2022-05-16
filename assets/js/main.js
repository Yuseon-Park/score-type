$(function() {
  $('a').each(function() {
    if(this.href=="" && this.href==undefined) {
      var a = new RegExp('/' + window.location.host + '/');
      if(!a.test(this.href)) {
          $(this).click(function(event) {
              event.preventDefault();
              event.stopPropagation();
              window.open(this.href, '_blank');
          });
      }
    }
  });

  $('input[type=range]').on('input', function () {
    var v = $(this).val();
    $('article').css('font-size',(v/1000)+'vw');

    if($('.template-font.seg1-').length>0) {
      var set = false;
      if($(window).width()>900) {

        window.breakpoints.forEach(function(e) {
          var b = parseInt(e['breakpoint'],10);
          var c = parseInt(e['columns'],10);
          if(v<b) {
            $('article').css('column-count', c);
            set = true;
          }
        });
      } else {
        $('article').css('column-count', '1');
      }
      if(!set) {
        $('article').css('column-count', '1');
      }
    }
  });
  if($('.template-font').length>0) {
    $('input[type=range]').trigger('input');
  }


  if($('.template-font').length>0) {
    $('article').focus();
  }

  if($('.template-home').length>0) {
    $(window).scroll(function() {
      var st = $(window).scrollTop();
      var limit = $(document).height() - $(window).height() - 300;
      if(st>limit) {
        var letters = $('.letter:gt(64)').clone();
        $('.letters').append(letters);
        var cnt = $('.letter').length;
      }
    });
  }
  $('.align').click(function() {
    if(!$(this).hasClass('disabled')) {
      var t = $(this);
      var align = t.data('align');
      $('article').css('text-align', align);
      $('.align').removeClass('active');
      t.addClass('active');
    }
  })
})
