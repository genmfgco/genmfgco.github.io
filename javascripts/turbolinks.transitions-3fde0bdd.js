(function(){var n,e,t,r;t=void 0,e=function(n){var e;return n?(e=n.type,e.indexOf(":")>-1?e.split(":")[0]:e.match(/[A-Z]?[a-z]+|[0-9]+/g)[0]):!1},r=function(n){return t=e(n),Pace.restart()},n=function(n){return e(n)===t?(t=void 0,$("#main").hide(),Pace.restart(),Pace.on("done",function(){return $("#main").fadeIn(),$(window).trigger("resize")})):void 0},$(document).on("page:fetch",function(n){return r(n)}),$(document).on("page:change",function(e){return n(e)})}).call(this);