$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: [
            'home',
            'chapter-one', '', '',
            'chapter-two', '', '',
            'chapter-three', '', '', '',
            'chapter-four' , '',
        ],
        menu: '#menu',
        scrollingSpeed: 1000,
        afterLoad: function(anchorLink, index) {
            if ('' !== anchorLink && 'undefined' !== typeof(anchorLink)) {
                $(".container .menu [data-menuanchor").removeClass('current');
                $(".container .menu [data-menuanchor='" + anchorLink + "']").addClass('current');
            }
        }
    });

    $('.light-mode-trigger').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('light-mode');
    });
});
