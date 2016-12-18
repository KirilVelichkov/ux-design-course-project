function showCourses() {

    var $divToShow = $('#courses-nav-container');
    var $divToHide = $('#content');
    var $profileToHide = $('#user-profile-container');

    if ($divToShow.is(':visible')) {
        $divToHide.show();
        $divToShow.hide();
        $profileToHide.hide();
        $('#courses').removeClass('menu-active');
    } else {
        $divToShow.show();
        $divToHide.hide();
        $profileToHide.hide();
        $('#courses').addClass('menu-active');
    }
}

function showProfile() {

    var $divToShow = $('#user-profile-container');
    var $divToHide = $('#content');
    var $coursesToHide = $('#courses-nav-container');

    if ($divToShow.is(':visible')) {
        $divToHide.show();
        $divToShow.hide();
        $('#courses').removeClass('menu-active');
    } else {
        $divToShow.show();
        $divToHide.hide();
        $coursesToHide.hide();
        $('#courses').removeClass('menu-active');
    }
}

function hideSearch() {
    $('#searchBox').hide();
}

function showSearch() {
    $('#searchBox').show();
}