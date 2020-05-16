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


$('.requirements-card').on('shown.bs.collapse', function (e) {
  $('.requirements-icon-div').addClass(' active');
  console.log('active')
}).on('hidden.bs.collapse', function (e) {
  $('.requirements-icon-div').removeClass(' active');
  console.log('not ')
})

$('.order-details-card').on('shown.bs.collapse', function (e) {
  $('.requirements-icon-div').addClass(' done');
  $('.order-details-icon-div').addClass(' active');
}).on('hidden.bs.collapse', function (e) {
  $('.order-details-icon-div').removeClass(' active');
});

