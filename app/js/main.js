document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() { toTop() };
    function toTop() {
      if(document.body.scrollTop>926 || document.documentElement.scrollTop>926) {
        document.getElementById("totop-link").classList.add("totop-visible");
      } else {
        document.getElementById("totop-link").classList.remove("totop-visible");
      }
    }
});
