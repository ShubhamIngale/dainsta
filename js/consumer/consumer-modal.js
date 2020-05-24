function bootstrapTabControl(){
    var i, items = $('.nav-link'), pane = $('.tab-pane');
    // next
    $('.modalDoneBtn').on('click', function(){
        for(i = 0; i < items.length; i++){
            if($(items[i]).hasClass('active') == true){
                break;
            }
        }
        if(i < items.length - 1){
            // for tab
            $(items[i]).removeClass('active');
            $(items[i+1]).addClass('active');
            // for pane
            $(pane[i]).removeClass('show active');
            $(pane[i+1]).addClass('show active');
        }
  
    });
    // Prev
    $('.backBtn').on('click', function(){
        for(i = 0; i < items.length; i++){
            if($(items[i]).hasClass('active') == true){
                break;
            }
        }
        if(i != 0){
            // for tab
            $(items[i]).removeClass('active');
            $(items[i-1]).addClass('active');
            // for pane
            $(pane[i]).removeClass('show active');
            $(pane[i-1]).addClass('show active');
        }
    });
  }
  bootstrapTabControl();




//   vanilla js for review

const starEls = document.querySelectorAll('.star.rating');
starEls.forEach(star => {
  star.addEventListener('click', function(e) {
    let starEl = e.currentTarget;
    console.log(starEl.parentNode.dataset.stars + ", " + starEl.dataset.rating);
    starEl.parentNode.setAttribute('data-stars', starEl.dataset.rating);
  });
})