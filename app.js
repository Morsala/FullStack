var now = new Date();

document.addEventListener('DOMContentLoaded', () => {
  var domDate = new Date() - now;
  console.log("DOM: " + domDate); 
})

window.onload = function () {
  var loadDate = new Date() - now;
  console.log("Load: " + loadDate);
}