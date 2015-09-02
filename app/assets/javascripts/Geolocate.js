document.addEventListener("DOMContentLoaded", function() {
  getLocation()
 });

function getLocation() {
        navigator.geolocation.getCurrentPosition(showPosition);
        navigator.geolocation.getCurrentPosition(setGeoCookie);
    }

function showPosition(position) {
   var coords = position.coords
      return coords
}

function setGeoCookie(position) {
  var cookie_val = position.coords.latitude + "|" + position.coords.longitude;
  document.cookie = "lat_lng=" + escape(cookie_val);
}
