function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

includeHTML();


// requirements
// $('.requirements-card').on('shown.bs.collapse', function (e) {
//   if($('.requirements-icon-div').hasClass('done-close')) {
//     $('.requirements-icon-div').removeClass(' done-close');
//     $('.requirements-icon-div').addClass(' done');
//   }
//   else {
//     $('.requirements-icon-div').addClass(' active');
//   }
// }).on('hidden.bs.collapse', function (e) {
//   if($('.requirements-icon-div').hasClass('done')) {
//     $('.requirements-icon-div').addClass(' done-close');
//   }
//   else {
//     $('.requirements-icon-div').removeClass(' active');
//   }
// })

// requirements
$('.requirements-card').on('shown.bs.collapse', function (e) {

  if( $('.requirements-icon-div').hasClass('done-close-requirements') ) {
    $('.requirements-icon-div').removeClass('done-close-requirements').addClass('done-requirements');
  }  else {
    $('.requirements-icon-div').addClass('active-requirements');
  }

}).on('hidden.bs.collapse', function (e) {

  if( $('.requirements-icon-div').hasClass('done-requirements') ) {
    $('.requirements-icon-div').removeClass('done-requirements').addClass('done-close-requirements');
  }  else {
    $('.requirements-icon-div').removeClass('active-requirements');
  }

});


// order details
$('.order-details-card').on('shown.bs.collapse', function (e) {

  $('.requirements-icon-div').addClass('done-close-requirements');

  if( $('.order-details-icon-div').hasClass('done-close-order-details') ) {
    $('.order-details-icon-div').removeClass('done-close-order-details').addClass('done-order-details');
  } else {
    $('.order-details-icon-div').addClass('active-order-details');
  }

}).on('hidden.bs.collapse', function (e) {

  if( $('.order-details-icon-div').hasClass('done-order-details') ) {
    $('.order-details-icon-div').removeClass('done-order-details').addClass('done-close-order-details');
  } else {
    $('.order-details-icon-div').removeClass('active-order-details');
  }

});



// shipping

$('.shipping-card').on('shown.bs.collapse', function (e) {

  $('.requirements-icon-div').addClass('done-close-requirements');
  $('.order-details-icon-div').addClass('done-close-order-details');

  if( $('.shipping-icon-div').hasClass('done-close-shipping') ) {
    $('.shipping-icon-div').removeClass('done-close-shipping').addClass('done-shipping');
  }
  else {
    $('.shipping-icon-div').addClass('active-shipping');
  }

}).on('hidden.bs.collapse', function (e) {

  if( $('.shipping-icon-div').hasClass('done-shipping') ) {
    $('.shipping-icon-div').removeClass('done-shipping').addClass('done-close-shipping');
  }
  else {
    $('.shipping-icon-div').removeClass('active-shipping');
  } 

});


// delivery and payment
$('.delivery-payment-card').on('shown.bs.collapse', function (e) {

  $('.requirements-icon-div').addClass('done-close-requirements');
  $('.order-details-icon-div').addClass('done-close-order-details');  
  $('.shipping-icon-div').addClass('done-close-shipping'); 

  $('.delivery-payment-icon-div').addClass('active-dp');


}).on('hidden.bs.collapse', function (e) {
  $('.delivery-payment-icon-div').removeClass('active-dp');

});







// order details
// $('.order-details-card').on('shown.bs.collapse', function (e) {
//   if($('.order-details-icon-div').hasClass('done-close')) {
//     $('.order-details-icon-div').removeClass(' done-close');
//     $('.order-details-icon-div').addClass(' done');
//   }
//   else {
//     $('.requirements-icon-div').addClass(' done');
//     $('.order-details-icon-div').addClass(' active');
//   }
// }).on('hidden.bs.collapse', function (e) {
//   if($('.order-details-icon-div').hasClass('done')) {
//     $('.order-details-icon-div').addClass(' done-close');
//   }
//   else {
//     $('.order-details-icon-div').removeClass(' active');
//   }
  
// });

// shipping 

// $('.shipping-card').on('shown.bs.collapse', function (e) {
//   console.log($('.shipping-card').innerHeight());
//   if($('.shipping-icon-div').hasClass('done-close')) {
//     $('.shipping-icon-div').removeClass(' done-close');
//     $('.shipping-icon-div').addClass(' done');
//   }
//   else {
//     $('.requirements-icon-div').addClass(' done');
//     $('.order-details-icon-div').addClass(' done');
//     $('.shipping-icon-div').addClass(' active-shipping ');
//   }
// }).on('hidden.bs.collapse', function (e) {
//   console.log($('.shipping-card').innerHeight());
//   if($('.shipping-icon-div').hasClass('done')) {
//     $('.shipping-icon-div').addClass(' done-close');
//   }
//   else {
//     $('.shipping-icon-div').removeClass(' active-shipping ');
//   }
// });


// $('.shipping-card').on('shown.bs.collapse', function (e) {
//   console.log($('.shipping-card').innerHeight());
  
// }).on('hidden.bs.collapse', function (e) {
//   console.log($('.shipping-card').innerHeight());
  
// });