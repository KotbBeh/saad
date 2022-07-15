(function () {
    
    // Start Loader

    $(window).on('load', function () {

        $("body").css("overflow-y", "auto");

        $(".loader").fadeOut();

        $(".loading").fadeOut().css({
            'transituin-delay' : '1s'
        });

    });

    // Start Prevent Default

    // $('.default').on('click', function(e){
    //     e.preventDefault();
    // });

    // Start Navbar

    $('.overlay').fadeOut();


})(jQuery);

// Start Map

function initMap() {
    //footer ksa

    var latlng = new google.maps.LatLng(24.679116,46.6777053);
    var map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 16,
        disableDefaultUI: true,
        animation: google.maps.Animation.DROP,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: 'Hello To Our World!'
    });

    //ksa

    var latlng1 = new google.maps.LatLng(24.679116,46.6777053);
    var map1 = new google.maps.Map(document.getElementById('map_KSA'), {
        center: latlng1,
        zoom: 16,
        disableDefaultUI: true,
        animation: google.maps.Animation.DROP,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var marker1 = new google.maps.Marker({
        position: latlng1,
        map: map1,
        title: 'Hello To Our World!'
    });

    //mansoura

    var latlng2 = new google.maps.LatLng(31.205753,29.924526);
    var map2 = new google.maps.Map(document.getElementById('map_Mansoura'), {
        center: latlng2,
        zoom: 16,
        disableDefaultUI: true,
        animation: google.maps.Animation.DROP,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var marker = new google.maps.Marker({
        position: latlng2,
        map: map2,
        title: 'Hello To Our World!'
    });


}



