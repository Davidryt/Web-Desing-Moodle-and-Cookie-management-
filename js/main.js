
$('.mycal').easycal({
	startDate : '14-12-2020', // OR 31/10/2104
	timeFormat : 'HH:mm',
	columnDateFormat : 'dddd, DD MMM',
	minTime : '09:00:00',
	maxTime : '18:00:00',
	slotDuration : 60,
	timeGranularity : 15,
	
	dayClick : function(el, startTime){
		console.log('Slot selected: ' + startTime);
	},
	eventClick : function(eventId){
		console.log('Event was clicked with id: ' + eventId);
	},
	
	events : getEvents(),
	
	overlapColor : '#FF0',
	overlapTextColor : '#000',
	overlapTitle : 'Multiple'
});

$('.tabsholder3').cardTabs({theme: 'graygreen'});

$(document).ready(function() {
	$('#percentage').circlize({
		radius: 30,
		perc: 60,
		usePercentage: true,
		background: "#fafafa",
		stroke: 4,
	});
});

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