# JCirclize

## Description

Percentage Circles Plugin for [jQuery](https://jquery.com/)

## Installation

Download the [repository][repo].

## Usage

### Load The Plugin

Use `<script src="dist/jquery.jCirclize.js"></script>` to load the jQuery version of the plugin.
*REMEMBER:* You have to load jQuery to use this version.

or use `<script src="dist/vanilla.jCirclize.js"></script>` to load the vanilla version of the plugin.

And use `<link href="css/jCirclize.css" rel="stylesheet" type="text/css">` to load the style inside your HTML page.

*WARNING* You have to load one version of the plugin and the css file to use this plugin.

## Basic Usage

You can just call the function without any options.

~~~javascript

// JQuery Version

$(document).ready(function() {
    $('#object').circlize();
});

// JavaScript Version

var element = document.getElementById("yourElement");
circlize(element, {});


~~~

Calling the function you set the element to the default parameters, it creates something like this:

![Preview](https://i.imgur.com/bqkjhDO.png)

## Default `options`

You can customize the percentage circle using some options of jCirclize. These are the defaults.

~~~javascript

// JQuery Version

$(document).ready(function() {
    $('#object').circlize({
		radius: 100, // The radius of the circle
		percentage: 50, // The percentage covered by the foreground
		usePercentage: true, // If you turn it to false it will use min and max
		useAnimations: true, // If you turn it to false it will not use the animations
		useGradient: true, // If you turn it to false it will use the solid color of the foreground
		background: "rgba(20,20,20,0.5)",
		foreground: "#1a1a1a",
		stroke: 20, // The width of the stroke
		duration: 1000, // The duration of the animation in milliseconds
		min: 100, // The minimum value
		max: 100, // The maximum value
		gradientColors: ["#f0f0f0", "red", "#f0f0f0"] // [Max 3 colors] Here you can set the colors of the gradients
	});
});

// JavaScript Version

var element = document.getElementById("yourElement");
circlize(element, {
	radius: 100, // The radius of the circle
	percentage: 50, // The percentage covered by the foreground
	usePercentage: true, // If you turn it to false it will use min and max
	useAnimations: true,// If you turn it to false it will not use the animations
	useGradient: true, // If you turn it to false it will use the solid color of the foreground
	background: "rgba(20,20,20,0.5)",
	foreground: "#1a1a1a",
	stroke: 20, // The width of the stroke
	duration: 1000, // The duration of the animation in milliseconds
	min: 100, // The minimum value
	max: 100, // The maximum value
	gradientColors: ["#f0f0f0", "red", "#f0f0f0"] // [Max 3 colors] Here you can set the colors of the gradients
});

~~~

This is my first plugin for JQuery, I hope you like it.

[repo]: https://github.com/francescovallone/jCirclize/archive/master.zip
