!function(a,b,c,d,e,f){"use strict";e.define("side-panel",[],function(){return{sPathCss:c.sPathCssUI+"?v="+c.sHash,oDefault:{side:"left",menuWidth:"200px"},onStart:function(){var a=d.getDataModules("side-panel"),b=this;d.loadCSS(this.sPathCss),d.trackModule("JS_Libraries","call","side-panel"),f(a).each(function(a){b.autobind(this,a)})},autobind:function(c,e){var g,h,i,j,k=this,l=c.href,m={},n=f(a).width();if(""===c.id&&(c.id="slide-panel-open"+e),null!==c.getAttribute("data-fc-width")&&(h=c.getAttribute("data-fc-width"),m.menuWidth=h,-1===h.indexOf("%")&&-1===h.indexOf("px")?(m.menuWidth+="px",h=parseInt(h,10)):h=-1===h.indexOf("%")?f("window").width()/parseInt(h,10):parseInt(h,10)),i=h,599>n&&i>599&&(m.menuWidth=n+"px"),null!==c.getAttribute("data-fc-position")&&(m.side=c.getAttribute("data-fc-position")),-1!==l.indexOf("#")&&(j=b.getElementById(l.split("#")[1])),g=d.mergeOptions(k.oDefault,m),null!==c.getAttribute("data-fc-tab")){f(c).addClass("side-panel-tab").addClass("side-panel-tab-"+g.side),null!==c.getAttribute("data-fc-tab-top")&&f(c).css("top",c.getAttribute("data-fc-tab-top"));var o=c.outerHTML;f(c).remove(),f("body").append(o),c=b.getElementById(c.id)}if("false"!==c.getAttribute("data-fc-clone")){var p="-"+e,q=f(j).attr("id")+"-"+e,r=f(j).clone().attr("id",f(j).attr("id")+p);c.href="#"+q,r.find("[id]").each(function(){var a=f(this),b=a.attr("id")+p;a.attr("id",b)}),r.find("[href]").each(function(){var a,b=f(this),c=b.attr("href");-1!==c.indexOf("#")&&(a=c+p,b.attr("href",a))}),f("body").append(r[0]),"false"!==c.getAttribute("data-fc-remove")&&f(j).remove(),j=b.getElementById(q),f(j).hide()}f(j).width(m.menuWidth),f(c).click(function(a){a.preventDefault(),f(j).removeClass("slide-out-"+g.side).addClass("animated slide-in-"+g.side+" side-panel-default side-panel-"+g.side),f(j).show(),void 0===f(".side-black-panel")[0]&&(f("body").append('<div class="side-black-panel animated fade-in"></div>').css({overflow:"hidden",height:"100%"}),f(".side-black-panel").on("click",function(){var a=this;f(j).addClass("slide-out-"+g.side),f(a).addClass("fade-out"),f("body").css({overflow:"auto",height:"initial"}),setTimeout(function(){f(a).remove()},700)}))})},onStop:function(){this.sPathCss=null},onDestroy:function(){delete this.sPathCss}}})}(window,document,oGlobalSettings,FrontendTools,FrontendCore,$);