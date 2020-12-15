


function searchCourses() {
  var input, filter, div, p, a, i, txtValue;
  input = document.getElementById("courseInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("allCourses");
  p = div.getElementsByTagName("p");

  // Loop through all div rows, and hide those who don't match the search query
  for (i = 0; i < p.length; i++) {
    a = p[i].getElementsByTagName("a")[0];
	if (a) {
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a.style.display = "";
      } else {
        a.style.display = "none";
      }
    }
  }
}