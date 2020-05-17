$('#skipBtn').on('click', function (e) {
    $('.nav-tabs > .active').next('li').find('a').trigger('click');
});

$('#skipBtnTwo').on('click', function (e) {
    $('.nav-tabs > .active').next('li').find('a').trigger('click');
});


$('.button-link-to-specific-tab').on('click', function (evt) {
    console.log("Button Test");
 });

// apply dynamic active to nav tablink

