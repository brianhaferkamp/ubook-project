$( document ).ready(function() {

  // menu controls
  var menu = $('#main-menu');
  var menuLink = $('#main-menu a');
  var menuOpen = $('.menu-open');
  var menuClose = $('.menu-close');
  var largeScreenOpen = $('#toc-toggle .menu-open');
  var largeScreenClose = $('#toc-toggle .menu-close');

  // sections
  var main = $('main');
  var masthead = $('.masthead');
  var title = $('.title');

  // hide these elements on page load
  menu.hide();
  menuClose.hide();
  masthead.hide();

  // open menu on menu open click
  menuOpen.on('click', function(e) {
    e.preventDefault();
    menu.show();
    menuOpen.hide();
    menuClose.show();
  });

  // close menu on menu close click
  menuClose.on('click', function(e) {
    e.preventDefault();
    menu.hide();
    menuOpen.show();
    menuClose.hide();
  });

  // close menu on menu close or link click
  menuLink.on('click', function() {
    menu.hide();
    menu.removeClass('menu-reveal');
    main.removeClass('menu-reveal');
    menuOpen.show();
    menuClose.hide();
  });

  // toggle table of contents open on screens 900px and up
  largeScreenOpen.on('click', function(e) {
    e.preventDefault();
    $(this).hide();
    largeScreenClose.show();
    main.addClass('menu-reveal');
    menu.addClass('menu-reveal');
  });

  // toggle table of contents closed on screens 900px and up
  largeScreenClose.on('click', function(e) {
    e.preventDefault();
    $(this).hide();
    largeScreenOpen.show();
    main.removeClass('menu-reveal');
    menu.removeClass('menu-reveal');
  });

  // show/hide masthead on window scroll
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      title.fadeOut();
      masthead.fadeIn().css({
        'display' : 'flex'
      });
    } else {
      title.fadeIn();
      masthead.fadeOut();
      main.removeClass('menu-reveal');
      menu.removeClass('menu-reveal');
      menuOpen.show();
      menuClose.hide();
    }
  });

});
