var events = [
  {'Date': new Date(2020, 11, 10), 'Title': 'Theory exam'},
  {'Date': new Date(2020, 11, 4), 'Title': 'Oral exam'},
  {'Date': new Date(2020, 11, 21), 'Title': 'Project 2 deadline'},
  {'Date': new Date(2020, 11, 15), 'Title': 'Mid-term exam'},

];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);

	