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

window.addEventListener('load', (e) => {
  document.querySelector('.loader').style.display = "none";

  const messageDropdownMenu = document.getElementById('messageDropdownMenu');
  const notificationHeader = document.getElementById('notificationHeader');
  const inboxHeader = document.getElementById('inboxHeader');

  messageDropdownMenu.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
  });

  notificationHeader.addEventListener('click', (e) => {
    notificationHeader.classList.add('active');
    inboxHeader.classList.remove('active');
  });

  inboxHeader.addEventListener('click', (e) => {
    notificationHeader.classList.remove('active');
    inboxHeader.classList.add('active');
  })


  // chatbox
const messageBox = document.querySelector('.message-box');
const end = document.querySelector('.end');
const closeIcon = document.querySelector('.close-icon');
const chatBtns = document.querySelectorAll('.chat-btn');
const notifications = document.querySelectorAll('.notification');


chatBtns.forEach(chatBtn => {
    chatBtn.addEventListener('click', (e) => {
        messageBox.classList.toggle('d-none');
        end.scrollIntoView({block: "end"});
    });
});

notifications.forEach(notification => {
  notification.addEventListener('click', (e) => {
    messageBox.classList.toggle('d-none');
    end.scrollIntoView({block: "end"});
  })
})

closeIcon.addEventListener('click', (e) => {
    messageBox.classList.toggle('d-none');
})

});




