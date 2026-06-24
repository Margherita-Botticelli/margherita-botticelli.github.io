var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var  abstract = this.nextElementSibling;
    if ( abstract.style.maxHeight){
       abstract.style.maxHeight = null;
    } else {
       abstract.style.maxHeight =  abstract.scrollHeight + "px";
    }
  });
}