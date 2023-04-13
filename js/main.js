$(document).ready(function($){
  $('.no-return').click(function(e) {
    e.preventDefault()
  });

  tns({
    container: '#slider',
    gutter: 10,
    mouseDrag: true,
    touch: true,
    autoWidth: true,
    controls: true,
    nav: false,
    controlsText: ['', '']
  });

  $('#slider a').simpleLightbox();

  $('.read-more').readmore({
    moreLink: '<div class="control"><a href="#">Read more</a></div>',
    lessLink: '<div class="control opened"><a href="#">Collapse</a></div>',
    collapsedHeight: 180
  });

  $('.install').click(function(e) {
    e.preventDefault();
    console.log('Install button click')
  });
});


