!function(a,b,c,d,e,f){"use strict";e.define("anchor-scroll",[],function(){var b=a.navigator.userAgent,c=b.indexOf("MSIE "),e=c>0||navigator.userAgent.match(/Trident.*rv\:11\./)?"html":"body";return{onStart:function(){var a=d.getDataModules("anchor-scroll"),b=this;d.trackModule("JS_Libraries","call","anchor-scroll"),f(a).each(function(a){b.autobind(this,a)})},autobind:function(b,c){var e=this;d.removeLoading(b),f(b).on("click",function(a){e.scrollTo(a,this)}),a.location.hash===b.getAttribute("href")&&setTimeout(function(){f(b).click()},100)},scrollTo:function(b,c){"A"!==c.nodeName&&(c=f(c).parents("a")[0]);var d="#"+c.href.split("#")[1],g=f(d),h=g.offset().top;null!==c.getAttribute("data-fc-substract")&&(h+=-f(c.getAttribute("data-fc-substract")).outerHeight()),null!==c.getAttribute("data-fc-add")&&(h+=+f(c.getAttribute("data-fc-add")).outerHeight()),g.length&&(b.preventDefault(),a.history.pushState?a.history.pushState(null,null,d):a.location.hash=d,f(e).stop().animate({scrollTop:h},500))}}})}(window,document,oGlobalSettings,FrontendTools,FrontendCore,$);