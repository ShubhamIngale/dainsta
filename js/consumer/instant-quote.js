var coll = document.getElementsByClassName("step-head");
var line = document.getElementById("icon");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      line.style.setProperty('--height', '0px')
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      lh = 100;
      const lineHeight = content.scrollHeight + lh;
      line.style.setProperty('--height', lineHeight +  'px')
    } 
  });
}