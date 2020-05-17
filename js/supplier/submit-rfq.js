
// requirements
$('.requirements-card').on('shown.bs.collapse', function (e) {

    $('.arrow-one').addClass('arrow-up');
  
    if( $('.requirements-icon-div').hasClass('done-close-requirements') ) {
      $('.requirements-icon-div').removeClass('done-close-requirements').addClass('done-requirements');
    }  else {
      $('.requirements-icon-div').addClass('active-requirements');
    }
  
  }).on('hidden.bs.collapse', function (e) {
  
    $('.arrow-one').removeClass('arrow-up');
  
    if( $('.requirements-icon-div').hasClass('done-requirements') ) {
      $('.requirements-icon-div').removeClass('done-requirements').addClass('done-close-requirements');
    }  else {
      $('.requirements-icon-div').removeClass('active-requirements');
    }
  
  });
  
  
  // order details
  $('.order-details-card').on('shown.bs.collapse', function (e) {
  
    $('.arrow-two').addClass('arrow-up');
  
    $('.requirements-icon-div').addClass('done-close-requirements');
  
    if( $('.order-details-icon-div').hasClass('done-close-order-details') ) {
      $('.order-details-icon-div').removeClass('done-close-order-details').addClass('done-order-details');
    } else {
      $('.order-details-icon-div').addClass('active-order-details');
    }
  
  }).on('hidden.bs.collapse', function (e) {
  
    $('.arrow-two').removeClass('arrow-up');
  
    if( $('.order-details-icon-div').hasClass('done-order-details') ) {
      $('.order-details-icon-div').removeClass('done-order-details').addClass('done-close-order-details');
    } else {
      $('.order-details-icon-div').removeClass('active-order-details');
    }
  
  });
  
  
  
  // shipping
  
  $('.shipping-card').on('shown.bs.collapse', function (e) {
  
    $('.arrow-three').addClass('arrow-up');
  
  
    $('.requirements-icon-div').addClass('done-close-requirements');
    $('.order-details-icon-div').addClass('done-close-order-details');
  
    if( $('.shipping-icon-div').hasClass('done-close-shipping') ) {
      $('.shipping-icon-div').removeClass('done-close-shipping').addClass('done-shipping');
    }
    else {
      $('.shipping-icon-div').addClass('active-shipping');
    }
  
  }).on('hidden.bs.collapse', function (e) {
  
    $('.arrow-three').removeClass('arrow-up');
  
    if( $('.shipping-icon-div').hasClass('done-shipping') ) {
      $('.shipping-icon-div').removeClass('done-shipping').addClass('done-close-shipping');
    }
    else {
      $('.shipping-icon-div').removeClass('active-shipping');
    } 
  
  });
  
  
  // delivery and payment
  $('.delivery-payment-card').on('shown.bs.collapse', function (e) {
  
    $('.arrow-four').addClass('arrow-up');
  
    $('.requirements-icon-div').addClass('done-close-requirements');
    $('.order-details-icon-div').addClass('done-close-order-details');  
    $('.shipping-icon-div').addClass('done-close-shipping'); 
  
    $('.delivery-payment-icon-div').addClass('active-dp');
  
  
  }).on('hidden.bs.collapse', function (e) {
  
    $('.arrow-four').removeClass('arrow-up');
  
    $('.delivery-payment-icon-div').removeClass('active-dp');
  
  });
  