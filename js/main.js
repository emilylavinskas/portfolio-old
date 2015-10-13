var $btnExpand = $(".toggle");
var $togglePanel = $('.toggle-panel');

$btnExpand.on('click', function() {
    $togglePanel.toggleClass('toggle-panel-expand');
});

$('.about').localScroll();

$('.portfolio').localScroll();

$('.contact').localScroll();