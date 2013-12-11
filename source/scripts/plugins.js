//= require vendor/custom.modernizr
//= require vendor/jquery
//= require foundation/foundation
//= require foundation.abide.latest
//= require foundation/foundation.alerts
//= require foundation/foundation.clearing
//= require foundation/foundation.cookie
//= require foundation/foundation.dropdown
//= require foundation/foundation.forms
//= require foundation/foundation.interchange
//= require foundation/foundation.joyride
//= require foundation/foundation.magellan
//= require foundation/foundation.orbit
//= require foundation/foundation.placeholder
//= require foundation/foundation.reveal
//= require foundation/foundation.section
//= require foundation/foundation.tooltips
//= require foundation/foundation.topbar

// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
  (function() {
    var noop = function() {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = window.console = {};
    while (length--) {
      console[methods[length]] = noop;
    }
  }());
}

$.fn.randomize = function(selector){
  var $elems = selector ? $(this).find(selector) : $(this).children(),
  $parents = $elems.parent();

  $parents.each(function(){
    $(this).children(selector).sort(function(){
      return Math.round(Math.random()) - 0.5;
    }).remove().appendTo(this);
  });

  return this;
};
