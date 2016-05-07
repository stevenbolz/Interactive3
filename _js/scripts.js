$(document).ready(function(){

/*-------------------------------------
| Pinned Navigation
-------------------------------------*/
var pin_state = 'scroll';

var nav_height = 70;
var main_offset = $('#main').offset().top;
var nav_offset = main_offset - nav_height;


function pinned_nav() {
	// how far scrolled from top
	var howFar = $(window).scrollTop();

	// console.log('Nav Offset:' + nav_offset);
	// console.log('Dist Scrolled:' + howFar);

	if (howFar >= nav_offset)
	{
		pin_state = 'pinned';
		$('body').addClass('pinned');
	}
	else
	{
		pin_state = 'scrolled';
		$('body').removeClass('pinned');
	}
}


$(window).scroll(pinned_nav);

/*-------------------------------------
| Animated Scroll
-------------------------------------*/
function animate_scroll(event) {
	event.preventDefault(); //thanks we will take it from here.

	// determine section
	var whichSect = $(this).attr('href');

	// get offset of our destination
	var scroll_destination = $(whichSect).offset().top - nav_height;

	// scroll window. have to use html and body for widest browser reach
	$('html, body').animate({scrollTop : scroll_destination}, 1000);
}

$('#mainmenu a').click(animate_scroll);


/*-------------------------------------
| Hamburger Menu Behaviors
-------------------------------------*/
var menu_state = 'hidden';

function menu_manage() {
	// get window size
	var winWidth = $(window).innerWidth();

	//change state based on window size
	if (winWidth > 800)
	{
		menu_state = 'visible';
		$('nav#mainmenu .glyphicon-menu-hamburger').hide();
		$('nav#mainmenu .menu').show();
	}
	else
	{
		menu_state = 'hidden';
		$('nav#mainmenu .glyphicon-menu-hamburger').show();
		$('nav#mainmenu .menu').hide();
	}

	console.log(menu_state);
}

menu_manage();
$(window).resize(menu_manage);
$(window).scroll(menu_manage);

/*-------------------------------------
| Hamburger Toggle
-------------------------------------*/
function hamburger_toggle() {
	if (menu_state == 'hidden')
	{
		menu_state = 'visible';
		$('nav#mainmenu .menu').show();
	}	
	else
	{
		menu_state = 'hidden';
		$('nav#mainmenu .menu').hide();
	}
}

$('nav#mainmenu .glyphicon-menu-hamburger').click(hamburger_toggle);

}); /*here ends doc ready*/



//LIGHTBOX//

function light_on() {
	var newSrc = $(this).find('img').attr('src');
	 $('#dark img').attr('src' , newSrc);

// get origional image side
	var liinboImg = new Image();
	liinboImg.src = newSrc;

	$(liinboImg).load(function(){

	new_w = liinboImg.width;
	new_h = liinboImg.height;


	$('#light').css({'width':new_w,'height':new_h});


	
//turn on the light box
	 $('#dark').show();
	}); //here ends the image load into memory

}

function light_off() {
	//turn off the lightboxS
	$('#dark').hide();
}

$('#gallery .item').click(light_on);
$('#dark .close').click(light_off);
$('#dark').click(light_off);


// THIS IS A TEST OF SWITCHES AND IF ELSE//
// var answer ="Allie"
// switch (answer) {
//   case "yes":
//     console.log("Yes, Allie is my dog.");
//     break;
//   case "no":
//     console.log("Well, too bad.");
//     break;
//   case "maybe":
//     console.log("Ok, how do you not know?");
//     break;
// }

// $ (document ) .ready(function(){


// var val = Allie("I am a Lab");

// switch (answer) {
//   case "yes":
//     console.log("Yes, Allie is my dog.");
//     break;
//   case "no":
//     console.log("Well, too bad.");
//     break;
//   case "maybe":
//     console.log("Ok, how do you not know?");
//     break;
// }

// });

// switch (answer) {
//   case "yes":
//     console.log("Yes, Allie is my dog.");
//     break;
//   case "no":
//     console.log("Well, too bad.");
//     break;
//   default:
//     console.log("Ok, how do you not know?");
// }

										// THIS IS ANOTHER TEST//

$ (document ) .ready(function(){

function isEqual(dog,cat){
  if (dog === cat) {
    return true;
  } else {
    return false;
  }
}

function myFun() {
  console.log("yes she is a dog");
  return "dog";
  // Any code below this line is never run
  console.log("byebye");
}
myFun();

var dog = {
  "name": "Allie",
  "legs": 4,
  "tails": 1,
  "enemies": ["Dumb People", "Gofers", "That $%^#&@ Neighbor Dog"],
  "color":"Brown",
  "weight": "90lbs",
  "eyes": "hazzel",
};

var cat = {
  "name": "lillie",
  "legs": 4,
  "tails": 1,
  "enemies": ["dogs", "birds", "water"],
  "color":"gray",
  "weight": "5lbs",
  "eyes": "brown",
};
											// END OF TEST//

											// TEST FOR ACCESSING OBJECTS PROPERLY//

JavaScript Timesies
var dog = {
  "name": "Miss.Allie",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Cats", "That $%^#&@ Squirrel"]
};


var theName = dog.name;

var numLegs = dog["legs"];

var tailsProp = "tails";
var numTails = dog[tailsProp];
var numEnemies = dog.enemies[0]; 
									
									// ANOTHER TEST//


var dog = {
  "name": "Miss.Allie",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Cats", "That $%^#&@ Squirrel"]
};

// Changing existing property values
dog.name = "Lady Allie";
// or 
dog["name"] = "Lady Allie";

// Add a new property and value
dog.bark = "woof";
// or 
dog["bark"] = "woof";									


// this is another test, we will be deleting //

delete dog.bark;
// end of test//

 


var race = {
  "1": "First",
  "2": "Second",
  "3": "Third",
  "4": "Fourth",
  "5": "Fifth"
};
