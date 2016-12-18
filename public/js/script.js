function showCourses() {

    var $divToShow = $('#courses-nav-container');
    var $divToHide = $('#content');
    
    if ($divToShow.is(':visible')){
        $divToHide.show();
        $divToShow.hide();
         $('#courses').removeClass('menu-active');
    }else{
        $divToShow.show();
        $divToHide.hide();
         $('#courses').addClass('menu-active');
    }

    // divToShow = document.getElementById('courses-nav-container');
    // divToHide = document.getElementById('content');
    // divToShow.style.display = 'block';
    // divToHide.style.display = 'none';
}

function hideSearch(){
    $('#searchBox').hide();
}

function showSearch(){
    $('#searchBox').show();
}