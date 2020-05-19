const cols = document.querySelectorAll(".step-head");
const line = document.querySelector(".head-icon-col");
const firstStep = document.querySelector('#first-head');

window.onload=function(){
    firstStep.click();
  };

cols.forEach((col, index) => {
  col.addEventListener("click", function () {
      
    if(index == 0) {
        var content = this.nextElementSibling;
        const icon = this.querySelector("#icon");
        const toggle = cols[index].querySelector('.toggle');
        const checkGroup = document.querySelector('.checkbox-group');
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          icon.style.setProperty("--height", "70px");
          icon.classList.remove('active-'+[index+1]);
          toggle.classList.remove('toggle-up');
          checkGroup.style.visibility = 'hidden';
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          lh = 100;
          const lineHeight = content.scrollHeight + lh;
          icon.style.setProperty("--height", lineHeight + "px");
          icon.classList.add('active-'+[index+1]);
          toggle.classList.add('toggle-up'); 
          checkGroup.style.visibility = 'visible';
        }
    }

    if(index ==1) {
        var content = this.nextElementSibling;
        const icon = this.querySelector("#icon");
        const toggle = cols[index].querySelector('.toggle');
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          icon.style.setProperty("--height", "70px");
          icon.classList.remove('active-'+[index+1]);
          toggle.classList.remove('toggle-up')    
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          lh = 100;
          const lineHeight = content.scrollHeight + lh;
          icon.style.setProperty("--height", lineHeight + "px");
          icon.classList.add('active-'+[index+1]);
          const prevIcon = cols[index-1].querySelector('#icon');
         prevIcon.classList.add('done-'+[index]);
         toggle.classList.add('toggle-up')    
        }
    }
    if(index ==2) {
        var content = this.nextElementSibling;
        const icon = this.querySelector("#icon");
        const toggle = cols[index].querySelector('.toggle');
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          icon.style.setProperty("--height", "70px");
          icon.classList.remove('active-'+[index+1]);
          toggle.classList.remove('toggle-up')    
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          lh = 100;
          const lineHeight = content.scrollHeight + lh;
          icon.style.setProperty("--height", lineHeight + "px");
          icon.classList.add('active-'+[index+1]);
          const prevIcon1 = cols[index-1].querySelector('#icon');
          const prevIcon2 = cols[index-2].querySelector('#icon');
         prevIcon1.classList.add('done-'+[index]);
         prevIcon2.classList.add('done-'+[index]);
         toggle.classList.add('toggle-up')    
        }
    }


    if(index == 3) {
        var content = this.nextElementSibling;
        const icon = this.querySelector("#icon-last");
        const toggle = cols[index].querySelector('.toggle');
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          icon.classList.remove('active-'+[index+1]);
          toggle.classList.remove('toggle-up')    
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          icon.classList.add('active-'+[index+1]);
          const prevIcon1 = cols[index-1].querySelector('#icon');
          const prevIcon2 = cols[index-2].querySelector('#icon');
          const prevIcon3 = cols[index-3].querySelector('#icon');
          prevIcon1.classList.add('done-'+[index]);
          prevIcon2.classList.add('done-'+[index]);
          prevIcon3.classList.add('done-'+[index]);
          toggle.classList.add('toggle-up')    
        }
    }
  });

});
