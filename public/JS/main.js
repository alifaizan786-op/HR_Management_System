var dateTime = moment().format("MMM Do, YYYY, hh:mm");
$(".dateTime").text(dateTime);

console.log(dateTime)

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });