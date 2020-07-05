// Intro text
var text = $(".split");

var split = new SplitText(text);

function random(min, max){
  return (Math.random() * (max - min)) + min;
}

$(split.chars).each(function(i){
  TweenMax.from($(this), 1.5, {
    opacity: 0,
    x: random(-500, 500),
    y: random(-500, 500),
    z: random(-500, 500),
    scale: .1,
    delay: i * .02,
    yoyo: true,
    repeat: 1,
    repeatDelay: 2.5
  });
});

// Placeholder

var tlTypeIt = new TimelineMax({delay:0.2, reversed: true, paused: true}),
  el = $('.PlaceHolder');
mySplitText = new SplitText(el, {type:"words,chars"}),
  chars = mySplitText.chars;

tlTypeIt.staggerTo(chars, 0.01, {opacity:0}, 0.02);

$( "input" ).focus(function() {
  tlTypeIt.play();
});

$( ".btn-search" ).click(function() {
  if(!$(this).val()){
    tlTypeIt.reverse();
  }
});
