// IE fix where console log was causing errors
if($('.ie').length) {
  if(!window.console) {
    var console = {
      log : function(){},
      warn : function(){},
      error : function(){},
      time : function(){},
      timeEnd : function(){}
    }
  }
}
/* ==========================================================================
    1. MOBILE ONLY CODE GOES HERE
   ========================================================================== */
//Home Header Offset
if (!$('.triumeq.hcp').length ) {
  //Set select on non-home pages
  var href = window.location.href;
  var hash = href.split('#')[1];
  $('select').val(hash);
}
// Changes PDF page links so they open to the right spot on Safari
if ($('.bar-util').length) {
  $('.bar-util > ul > li').eq(0).find('a').attr('href','https://www.gsksource.com/pharma/content/dam/GlaxoSmithKline/US/en/Prescribing_Information/Triumeq/pdf/TRIUMEQ-PI-MG.PDF#page=1');
  $('.bar-util > ul > li').eq(1).find('a').attr('href','https://www.gsksource.com/pharma/content/dam/GlaxoSmithKline/US/en/Prescribing_Information/Triumeq/pdf/TRIUMEQ-PI-MG.PDF#page=38');

  var uagent = navigator.userAgent.toLowerCase();
  if (/safari/.test(uagent) && !/chrome/.test(uagent)) {
    $('.bar-util > ul > li').eq(0).find('a').attr('href','https://www.gsksource.com/pharma/content/dam/GlaxoSmithKline/US/en/Prescribing_Information/Triumeq/pdf/TRIUMEQ-PI-MG.PDF#page1');
    $('.bar-util > ul > li').eq(1).find('a').attr('href','https://www.gsksource.com/pharma/content/dam/GlaxoSmithKline/US/en/Prescribing_Information/Triumeq/pdf/TRIUMEQ-PI-MG.PDF#page38');
  }
}
//Group main menu sections to toggle open and closed
$('.grouping > h3 > a').on('click.luckie', function(e){
  e.preventDefault();
  if( $(this).closest('.grouping').hasClass('clicked') ) {
    //Close if already opened
    $(this).closest('.grouping').toggleClass('clicked');  
  } else {
    $('.grouping').removeClass('clicked');
    $(this).closest('.grouping').toggleClass('clicked');
  }
});
$('.grouping ul a').on('click.luckie',function(e) {
  var href = $(this).attr('href');
  var hash = href.split('#')[1];

  $('select option').removeAttr('selected');
  $('select').val(hash);
  var $selectHash = 'select option[value=' + hash + ']';
  $($selectHash).attr('selected', 'selected');
  $('select').trigger('change');
});
// @TODO: ISI
//Add the ISI to the bottom of each page's content, just before prescribing callout
if ($('.added-isi').length){} else {
  var isiHtml = $('#sidebar').html();
  $('.prescribing-callout').before("<div class='added-isi'></div>");
  $('.added-isi').append(isiHtml);
  //On Home, move Indications and usage section
  if ($('.triumeq.hcp').length) {
    var indicationsUsage = $('.added-isi .indications-usage').html();
    $('.cta-section').before('<div class="added-indications"></div>');
    $('.added-indications').append(indicationsUsage);
  }
}
var headerHeight = $('.header-pad').outerHeight(true);
//Mobile Sub-menu Select Jump Links
$('select').on('change.luckie', function() {
  if ($('section[id="' + $(this).val()+ '"]').hasClass('first-section')) {
    $('html, body').animate({
      scrollTop: 0
    }, 300, function(){
    });
  } else {
    $('html, body').animate({
      scrollTop: $('section[id="' + $(this).val()+ '"]').offset().top - $('.header-pad').outerHeight(true)
    }, 300, function(){
    });
  }
});
$('.navigation .menu-column:last-child').css('padding-bottom', $('#sidebar').outerHeight(true));
// close menu on click even if on desired page
$('.navigation ul a').on('click.luckie', function(e) {
  $('#header').removeClass('show-nav');
});

//Setting min-height on all charts graphics
$('img[data-width]').each(function(){
  var $this = $(this);
  $this.css('min-height', ($this.innerWidth() - 64) * ($this.attr('data-height') / $this.attr('data-width')) );
});

/* ==========================================================================
    2. NON-MOBILE ONLY CODE GOES HERE
   ========================================================================== */

//Define height of sub-menu in duplicate offset container
$('.sub-menu-offset').css('height',$('.sub-menu').height()-4);
if (once) {
  $('.sub-menu li a').css('height',$('.sub-menu').height());

  var uagent = navigator.userAgent.toLowerCase();
  if(/safari/.test(uagent) && !/chrome/.test(uagent)) {
    $('.bar-util > ul li li a').each(function(){
      var safariHref = $(this).attr('href');
      safariHref = safariHref.replace('=','');
      $(this).attr('href',safariHref);
    })
  }
  $('#header').after('<div class="header-off"></div>');
  $('.header-off').css('height',$('#header').height() + 40).css('display','none');

  //Get each sections top position
  $('.page-section:not(".sub-menu")').each(function() {
    $(this).attr('data-top', $(this).position().top - 14);
  });
}

if ($('.ie').length) {
  $('.scrollable-content, .navigation').css('width', $(window).outerWidth() - $('#sidebar').outerWidth());
}

$('.header-offset').css('height', 0);

if ($('.sub-menu').length) {
  $('.sub-menu li a').attr('style','');
  $('.sub-menu li a').css('height',$('.sub-menu').height());
}

if ($('.bar-util').length) {
  //Make drop down parent stay highlighted
  $('.bar-util > ul ul').on('mouseover.luckie',function() {
    $(this).parent().addClass('stay-hovered');
  });
  $('.bar-util > ul ul').on('mouseleave.luckie',function() {
    $(this).parent().removeClass('stay-hovered');
  });
}

$('#sidebar').attr('style','');

var prevST = 0;
$('.scrollable-content').on('scroll.luckie', function(event) {
  var st = $('.scrollable-content').scrollTop();
  if (st <= 21) {
    if (st < prevST) {
      $('#header').removeClass('minimal');
      $('.sub-menu-offset').hide();
      $('.header-off').hide();
      if ($('.sub-menu.fixed').length > 0) {
        $('.sub-menu').removeClass('fixed');
      }
      $('.sub-menu li a').attr('style','');
    }
  } else {
    if (st > prevST) {
      $('#header').addClass('minimal');
      $('.sub-menu-offset').show();
      $('.header-off').show();
      if ($('.sub-menu').length > 0) {
        $('.sub-menu').not('.fixed').addClass('fixed');
        $('.sub-menu li a').css('height',$('.sub-menu').height()).css('width',$('.sub-menu li').width());
      }
    }
  }

  for(var i=0; i < $('.page-section:not(".sub-menu")').length; i++) {
    if ($('.scrollable-content').scrollTop() > $('.page-section:not(".sub-menu")').eq(i).position().top - 100) {
      $('.sub-menu li').removeClass('active');
      $('.sub-menu li').eq(i).addClass('active');
    }
  }
  prevST = st;
});

/* Enable smooth scrolling on all .sub-menu links with anchors */
$('.sub-menu a[href^="#"]').on('click.luckie', function(event) {
  // prevent default anchor click behavior
  event.preventDefault();
  $('.sub-menu li').removeClass('active');

  $(this).parent().addClass('active');
  // store hash
  var hash = this.hash;

  var amountToScroll = 0;
  if ($('section[id="' + this.hash.replace('#', '') + '"]').hasClass('first-section')) {
    amountToScroll = -10000;
  }
  $ie_margin_fix = 0;
  if ($('.ie').length) {
    $ie_margin_fix = 20;
  }
  
  if ($('.header-off').is(':visible')) {
    amountToScroll += $('.header-off').height() + $('section[id="' + this.hash.replace('#', '') + '"]').position().top - 72 - $ie_margin_fix;
  } else {
    amountToScroll += $('.header-off').height() + $('section[id="' + this.hash.replace('#', '') + '"]').position().top - 48 - $ie_margin_fix;
  }

  if ($('.ie').length) {
    amountToScroll -= 10;
  }

  $('.scrollable-content').animate({
    scrollTop: amountToScroll
  }, 300, function(){
    // when done, add hash to url
    if ($('.ie').length) {} else {
      if (history.pushState) {
        history.pushState(null, null, hash);
      } else {
        location.hash = hash;
      }
    }
  });
});

// close menu on click even if on desired page
$('.navigation a').on('click.luckie', function() {
  $('#header').removeClass('show-nav');
  $('.scrollable-content').toggleClass('lock-scroll');
  var initHash = '' + $(this).attr('href');
  initHash = '#' + initHash.split('#')[1];
  if(initHash != '') {
    if( $('section[id="' + initHash.replace('#', '') + '"]').hasClass('first-section') ) {
      $('.header-off').hide();
      $('.sub-menu').removeClass('fixed');
      $('#header').removeClass('minimal');
      $('.scrollable-content').animate({
        scrollTop: 0
      }, 300);
    } else {
      $('#header').addClass('minimal');
      $('.sub-menu').addClass('fixed');
      $('.header-off').show();
      $('.sub-menu a[href="' + initHash + '"]').trigger('click.luckie');      
    } 
  }
});

/* ==========================================================================
    3. UNIVERSAL CODE GOES HERE
   ========================================================================== */

//Initial Hash Jump Link Jump
if (once && $('.desktop-view').is(':visible')) {
  once = false; // only do this once, not additionally on resize

  var initHash = window.location.hash;
  if(initHash != '') {
    if ($('section[id="' + initHash.replace('#', '') + '"]').hasClass('first-section')) {
      $('#header').removeClass('minimal');
      $('.scrollable-content,html,body').animate({
        scrollTop: 0
      }, 300);
      if (initHash == '#hla-screening-importance') {
        setTimeout(function(){$('.sub-menu a[href="' + initHash + '"]').trigger('click.luckie');},1000);
      }
    } else {
      $('#header').addClass('minimal');
      $('.sub-menu').addClass('fixed');
      $('.header-off').show();
      if ($('.ie').length) {
        setTimeout(function(){$('.sub-menu a[href="' + initHash + '"]').trigger('click.luckie');},1500);
      } else {
        setTimeout(function(){$('.sub-menu a[href="' + initHash + '"]').trigger('click.luckie');},150);
      }
    } 
  }
} else if (once) {
  //on mobile jump nav, this double checks the jump scroll went where it was intended. We were getting errors based on when the script was run and how much of the images had loaded in. 
  var initHash = window.location.hash;
  once = false; // only do this once, not additionally on resize
  function scrollToSection() {
    // take the current section from the hash and adjust the top offset to account for the header
    var newHeight = $('section[id="' + initHash.replace('#', '') + '"]').offset().top - headerHeight; 
    $('html, body').animate({
      scrollTop: newHeight
    }, 300, function() {
      var currentHeight = $('body').scrollTop();
      //compare the current scroll position with the 'newHeight'' variable and re-run the function if their difference is >1 (to account for rounding errors)
      var diff = Math.abs(newHeight - currentHeight);
      if(diff >= 1) { 
        scrollToSection();
      }
    });
  }
  if (initHash != '') {
    if (!$('section[id="' + initHash.replace('#', '') + '"]').hasClass('first-section')) {
      scrollToSection();
    } else {
      $('.scrollable-content,html,body').animate({
        scrollTop: 0
      }, 300);
    }
  }
}

$menuOffset = $('.bar-util').height();

if ($('.mobile-view').is(':visible')) { 
  var mobileOffset = $('.header-pad').height();
  $('.navigation').css('top', mobileOffset);
  $('.logo').css('top','');
} else {
  $('.navigation, #header .logo').css('top', $menuOffset);
}

$('.menu-icon').on('click.luckie',function() {
  $('#header').toggleClass('show-nav');
  $('.scrollable-content').toggleClass('lock-scroll');
  if($('#sidebar').hasClass('active')) {
    $('#sidebar').toggleClass('active');
    $('#sidebar').css('height', '33px');
    $('#sidebar').css('min-height', '33px');
    $('footer').css('margin-bottom', '33px');
  }
  if ($('#header').hasClass('minimal')) {
    if( $('.scrollable-content').scrollTop() < 144) {
      $('#header').removeClass('minimal');
    }
  } else {
    $('#header').addClass('minimal');
  }

  if ($('.ie').length) {
    $('.scrollable-content').toggleClass('nav-open');
    $('.navigation').css('width',$(window).width() - $('#sidebar').outerWidth() + 17);
  }
});

/*--------------!@ NO @! - Page specific---------------------------------------------*/
// Opens all links in a new window  
$('a').each(function() {
  //If the clicked link is not marked as a modal (nonViiv), continue
  //if (!$(this).hasClass('modal')){
    var a = new RegExp('/' + window.location.host + '/');
    //If this link is meant to link offsite, cancel default behavior and open in a new window
    if(!a.test(this.href)) {
        $(this).on("click.luckie", function(e) {
            e.preventDefault();
            window.open(this.href, '_blank');
        });
    };
  //};
});
/*--------------!@ NO @! - Page specific---------------------------------------------*/

/* ==========================================================================
    5. INIT PLUGINS - If using external code, best to instantiate it here
   ========================================================================== */
$(window).on('resize.luckie',function(){ 
  fixFootnoteMargin(); 
});

var fixFootnoteMargin = function(){
  if ($('.mobile-view').is(':visible')){ 
    $('#header').addClass('static');
    $('.footnote').css('margin-top','0px'); 
  } else {
    $('.footnote').css('margin-top',$('.hero .buttons').height());
  }
}

$(window).on("orientationchange",function(e){
  setTimeout(function() {
    $('html, body, .scrollable-content').animate({
      scrollTop: 0
    }, 0);
    if ($(window).width() > $(window).height()) {
    } else {
      //Portrait stuff to do ...
      $('.sub-menu').removeClass('fixed');
      $('#header').removeClass('minimal');
      $('.sub-menu-offset').css('display','none');
      $('.header-offset').css('height', $('#header').height());
      
      // TODO: ISI
      if ($('.added-isi').length > 0){} else {
        var isiHtml = $('#sidebar').html();
        $('.prescribing-callout').before("<div class='added-isi'></div>");
        $('.added-isi').append(isiHtml);
        if ($('.triumeq.hcp').length) {
          var indicationsUsage = $('.added-isi .indications-usage').html();
          $('.cta-section').before('<div class="added-indications"></div>');
          $('.added-indications').append(indicationsUsage);
        }
      }
    }
  }, 250);
});

$(window).bind("pageshow", function(event) {
  if (event.originalEvent.persisted) {
    window.location.reload() 
  }
});