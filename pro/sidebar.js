$(function() {
    $('.toggle-sidebar').click(function() {
        toggleSideBar();
    });
});

function toggleSideBar() {
    
    if ($('#page-wrapper').hasClass('show-sidebar')) {
        // Do things on Nav Close
        $('#page-wrapper').removeClass('show-sidebar');
    } else {
        // Do things on Nav Open
        $('#page-wrapper').addClass('show-sidebar');
    }
    //$('#site-wrapper').toggleClass('show-nav');
}
