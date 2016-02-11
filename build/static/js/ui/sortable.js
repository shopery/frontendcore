!function(a,b,c,d){function e(a,b){var c=Math.max(0,a[0]-b[0],b[0]-a[1]),d=Math.max(0,a[2]-b[1],b[1]-a[3]);return c+d}function f(b,c,d,e){var f=b.length,g=e?"offset":"position";for(d=d||0;f--;){var h=b[f].el?b[f].el:a(b[f]),i=h[g]();i.left+=parseInt(h.css("margin-left"),10),i.top+=parseInt(h.css("margin-top"),10),c[f]=[i.left-d,i.left+h.outerWidth()+d,i.top-d,i.top+h.outerHeight()+d]}}function g(a,b){var c=b.offset();return{left:a.left-c.left,top:a.top-c.top}}function h(a,b,c){b=[b.left,b.top],c=c&&[c.left,c.top];for(var d,f=a.length,g=[];f--;)d=a[f],g[f]=[f,e(d,b),c&&e(d,c)];return g=g.sort(function(a,b){return b[1]-a[1]||b[2]-a[2]||b[0]-a[0]})}function i(b){this.options=a.extend({},m,b),this.containers=[],this.options.rootGroup||(this.scrollProxy=a.proxy(this.scroll,this),this.dragProxy=a.proxy(this.drag,this),this.dropProxy=a.proxy(this.drop,this),this.placeholder=a(this.options.placeholder),b.isValidTarget||(this.options.isValidTarget=d))}function j(b,c){this.el=b,this.options=a.extend({},l,c),this.group=i.get(this.options),this.rootGroup=this.options.rootGroup||this.group,this.handle=this.rootGroup.options.handle||this.rootGroup.options.itemSelector;var d=this.rootGroup.options.itemPath;this.target=d?this.el.find(d):this.el,this.target.on(k.start,this.handle,a.proxy(this.dragInit,this)),this.options.drop&&this.group.containers.push(this)}var k,l={drag:!0,drop:!0,exclude:"",nested:!0,vertical:!0},m={afterMove:function(a,b,c){},containerPath:"",containerSelector:"ol, ul",distance:0,delay:0,handle:"",itemPath:"",itemSelector:"li",bodyClass:"dragging",draggedClass:"dragged",isValidTarget:function(a,b){return!0},onCancel:function(a,b,c,d){},onDrag:function(a,b,c,d){a.css(b)},onDragStart:function(b,c,d,e){b.css({height:b.outerHeight(),width:b.outerWidth()}),b.addClass(c.group.options.draggedClass),a("body").addClass(c.group.options.bodyClass)},onDrop:function(b,c,d,e){b.removeClass(c.group.options.draggedClass).removeAttr("style"),a("body").removeClass(c.group.options.bodyClass)},onMousedown:function(a,b,c){return c.target.nodeName.match(/^(input|select|textarea)$/i)?void 0:(c.preventDefault(),!0)},placeholderClass:"placeholder",placeholder:'<li class="placeholder"></li>',pullPlaceholder:!0,serialize:function(b,c,d){var e=a.extend({},b.data());return d?[c]:(c[0]&&(e.children=c),delete e.subContainers,delete e.sortable,e)},tolerance:0},n={},o=0,p={left:0,top:0,bottom:0,right:0},k={start:"touchstart.sortable mousedown.sortable",drop:"touchend.sortable touchcancel.sortable mouseup.sortable",drag:"touchmove.sortable mousemove.sortable",scroll:"scroll.sortable"},q="subContainers";i.get=function(a){return n[a.group]||(a.group===d&&(a.group=o++),n[a.group]=new i(a)),n[a.group]},i.prototype={dragInit:function(b,c){this.$document=a(c.el[0].ownerDocument);var d=a(b.target).closest(this.options.itemSelector);if(d.length){if(this.item=d,this.itemContainer=c,this.item.is(this.options.exclude)||!this.options.onMousedown(this.item,m.onMousedown,b))return;this.setPointer(b),this.toggleListeners("on"),this.setupDelayTimer(),this.dragInitDone=!0}},drag:function(a){if(!this.dragging){if(!this.distanceMet(a)||!this.delayMet)return;this.options.onDragStart(this.item,this.itemContainer,m.onDragStart,a),this.item.before(this.placeholder),this.dragging=!0}this.setPointer(a),this.options.onDrag(this.item,g(this.pointer,this.item.offsetParent()),m.onDrag,a);var b=this.getPointer(a),c=this.sameResultBox,e=this.options.tolerance;(!c||c.top-e>b.top||c.bottom+e<b.top||c.left-e>b.left||c.right+e<b.left)&&(this.searchValidTarget()||(this.placeholder.detach(),this.lastAppendedItem=d))},drop:function(a){this.toggleListeners("off"),this.dragInitDone=!1,this.dragging&&(this.placeholder.closest("html")[0]?this.placeholder.before(this.item).detach():this.options.onCancel(this.item,this.itemContainer,m.onCancel,a),this.options.onDrop(this.item,this.getContainer(this.item),m.onDrop,a),this.clearDimensions(),this.clearOffsetParent(),this.lastAppendedItem=this.sameResultBox=d,this.dragging=!1)},searchValidTarget:function(a,b){a||(a=this.relativePointer||this.pointer,b=this.lastRelativePointer||this.lastPointer);for(var c=h(this.getContainerDimensions(),a,b),e=c.length;e--;){var f=c[e][0],i=c[e][1];if(!i||this.options.pullPlaceholder){var j=this.containers[f];if(!j.disabled){if(!this.$getOffsetParent()){var k=j.getItemOffsetParent();a=g(a,k),b=g(b,k)}if(j.searchValidTarget(a,b))return!0}}}this.sameResultBox&&(this.sameResultBox=d)},movePlaceholder:function(a,b,c,d){var e=this.lastAppendedItem;(d||!e||e[0]!==b[0])&&(b[c](this.placeholder),this.lastAppendedItem=b,this.sameResultBox=d,this.options.afterMove(this.placeholder,a,b))},getContainerDimensions:function(){return this.containerDimensions||f(this.containers,this.containerDimensions=[],this.options.tolerance,!this.$getOffsetParent()),this.containerDimensions},getContainer:function(a){return a.closest(this.options.containerSelector).data(c)},$getOffsetParent:function(){if(this.offsetParent===d){var a=this.containers.length-1,b=this.containers[a].getItemOffsetParent();if(!this.options.rootGroup)for(;a--;)if(b[0]!=this.containers[a].getItemOffsetParent()[0]){b=!1;break}this.offsetParent=b}return this.offsetParent},setPointer:function(a){var b=this.getPointer(a);if(this.$getOffsetParent()){var c=g(b,this.$getOffsetParent());this.lastRelativePointer=this.relativePointer,this.relativePointer=c}this.lastPointer=this.pointer,this.pointer=b},distanceMet:function(a){var b=this.getPointer(a);return Math.max(Math.abs(this.pointer.left-b.left),Math.abs(this.pointer.top-b.top))>=this.options.distance},getPointer:function(a){var b=a.originalEvent||a.originalEvent.touches&&a.originalEvent.touches[0];return{left:a.pageX||b.pageX,top:a.pageY||b.pageY}},setupDelayTimer:function(){var a=this;this.delayMet=!this.options.delay,this.delayMet||(clearTimeout(this._mouseDelayTimer),this._mouseDelayTimer=setTimeout(function(){a.delayMet=!0},this.options.delay))},scroll:function(a){this.clearDimensions(),this.clearOffsetParent()},toggleListeners:function(b){var c=this,d=["drag","drop","scroll"];a.each(d,function(a,d){c.$document[b](k[d],c[d+"Proxy"])})},clearOffsetParent:function(){this.offsetParent=d},clearDimensions:function(){this.traverse(function(a){a._clearDimensions()})},traverse:function(a){a(this);for(var b=this.containers.length;b--;)this.containers[b].traverse(a)},_clearDimensions:function(){this.containerDimensions=d},_destroy:function(){n[this.options.group]=d}},j.prototype={dragInit:function(a){var b=this.rootGroup;!this.disabled&&!b.dragInitDone&&this.options.drag&&this.isValidDrag(a)&&b.dragInit(a,this)},isValidDrag:function(a){return 1==a.which||"touchstart"==a.type&&1==a.originalEvent.touches.length},searchValidTarget:function(a,b){var c=h(this.getItemDimensions(),a,b),d=c.length,e=this.rootGroup,f=!e.options.isValidTarget||e.options.isValidTarget(e.item,this);if(!d&&f)return e.movePlaceholder(this,this.target,"append"),!0;for(;d--;){var g=c[d][0],i=c[d][1];if(!i&&this.hasChildGroup(g)){var j=this.getContainerGroup(g).searchValidTarget(a,b);if(j)return!0}else if(f)return this.movePlaceholder(g,a),!0}},movePlaceholder:function(b,c){var d=a(this.items[b]),e=this.itemDimensions[b],f="after",g=d.outerWidth(),h=d.outerHeight(),i=d.offset(),j={left:i.left,right:i.left+g,top:i.top,bottom:i.top+h};if(this.options.vertical){var k=(e[2]+e[3])/2,l=c.top<=k;l?(f="before",j.bottom-=h/2):j.top+=h/2}else{var m=(e[0]+e[1])/2,n=c.left<=m;n?(f="before",j.right-=g/2):j.left+=g/2}this.hasChildGroup(b)&&(j=p),this.rootGroup.movePlaceholder(this,d,f,j)},getItemDimensions:function(){return this.itemDimensions||(this.items=this.$getChildren(this.el,"item").filter(":not(."+this.group.options.placeholderClass+", ."+this.group.options.draggedClass+")").get(),f(this.items,this.itemDimensions=[],this.options.tolerance)),this.itemDimensions},getItemOffsetParent:function(){var a,b=this.el;return a="relative"===b.css("position")||"absolute"===b.css("position")||"fixed"===b.css("position")?b:b.offsetParent()},hasChildGroup:function(a){return this.options.nested&&this.getContainerGroup(a)},getContainerGroup:function(b){var e=a.data(this.items[b],q);if(e===d){var f=this.$getChildren(this.items[b],"container");if(e=!1,f[0]){var g=a.extend({},this.options,{rootGroup:this.rootGroup,group:o++});e=f[c](g).data(c).group}a.data(this.items[b],q,e)}return e},$getChildren:function(b,c){var d=this.rootGroup.options,e=d[c+"Path"],f=d[c+"Selector"];return b=a(b),e&&(b=b.find(e)),b.children(f)},_serialize:function(b,c){var d=this,e=c?"item":"container",f=this.$getChildren(b,e).not(this.options.exclude).map(function(){return d._serialize(a(this),!c)}).get();return this.rootGroup.options.serialize(b,f,c)},traverse:function(b){a.each(this.items||[],function(c){var d=a.data(this,q);d&&d.traverse(b)}),b(this)},_clearDimensions:function(){this.itemDimensions=d},_destroy:function(){var b=this;this.target.off(k.start,this.handle),this.el.removeData(c),this.options.drop&&(this.group.containers=a.grep(this.group.containers,function(a){return a!=b})),a.each(this.items||[],function(){a.removeData(this,q)})}};var r={enable:function(){this.traverse(function(a){a.disabled=!1})},disable:function(){this.traverse(function(a){a.disabled=!0})},serialize:function(){return this._serialize(this.el,!0)},refresh:function(){this.traverse(function(a){a._clearDimensions()})},destroy:function(){this.traverse(function(a){a._destroy()})}};a.extend(j.prototype,r),a.fn[c]=function(b){var e=Array.prototype.slice.call(arguments,1);return this.map(function(){var f=a(this),g=f.data(c);return g&&r[b]?r[b].apply(g,e)||this:(g||b!==d&&"object"!=typeof b||f.data(c,new j(f,b)),this)})}}(jQuery,window,"sortable"),function(a,b,c,d,e,f){"use strict";e.define("sortable",[],function(){return{sInput:null,oTarget:[],delay:500,placeholer:'<li class="placeholder" data-fc-modules="va">',oDefault:{oldContainer:null,group:"this",nested:!1},afterMove:function(a,b){var c=f(b.el).closest("ol[data-fc-modules=sortable]")[0];this.oldContainer!=b&&(this.oldContainer&&this.oldContainer.el.removeClass("active"),b.el.addClass("active"),this.oldContainer=b),this.showEmptyList(c),this.hideEmptyList(c),f(c).sortable("refresh")},onDrop:function(a,b,c){var d,e=f(b.el).closest("ol[data-fc-modules=sortable]")[0]?f(b.el).closest("ol[data-fc-modules=sortable]")[0]:f(b.el)[0];void 0!==e&&(d="json"===e.getAttribute("data-fc-output")?this.serialize(e):this.arraylize(e),null!==e.getAttribute("data-fc-input")&&this.fillInput(e.getAttribute("data-fc-input"),d),null!==e.getAttribute("data-fc-url")&&this.sendAjax(e.getAttribute("data-fc-url"),d)),b.el.removeClass("active");var g=f(a);g.removeClass("dragged").removeAttr("style"),f("body").removeClass("dragging"),this.hideEmptyList(e),c(a)},onDrag:function(a,b,c,d){a.offset(f(".placeholder").offset())},onDragStart:function(a,b,c,d){f(a.context).closest("ol[data-fc-modules=sortable]")[0];a.addClass("dragged"),f("body").addClass("dragging")},isValidTarget:function(a,b){var c=f(a.context).closest("ol[data-fc-modules=sortable]")[0];if(void 0!==c){var d=f(b.el.context,"#"+c.id).parents("ol").length+1,e=null!==c.getAttribute("data-fc-depth")?c.getAttribute("data-fc-depth"):2;return d>e?!1:void 0!==f(".dragged").find("li")[0]&&d>e-1?!1:!0}return!0},addEmptyList:function(a){void 0!==a&&f("li",a).each(function(){void 0===f("ol",this)[0]&&f(this).append('<ol class="sub-sortable"></ol>')}),f(a).sortable("refresh")},hideEmptyList:function(a){if(void 0!==a){var b,c=null!==a.getAttribute("data-fc-depth")?a.getAttribute("data-fc-depth"):2;f("li",a).each(function(){b=f(this,"#"+a.id).parents("ol").length,b>=c&&f("ol",this).css({height:"1px",padding:"0px",margin:"0px",background:"transparent",position:"absolute"})})}},showEmptyList:function(a){void 0!==a&&f("li",a).each(function(){void 0===f("ol li",this)[0]&&f("ol",this).removeAttr("style")}),f(a).sortable("refresh")},onStart:function(){var a=b.querySelectorAll('[data-fc-modules="sortable"]'),c=this;d.trackModule("JS_Libraries","call","sortable"),f(a).each(function(a){c.autobind(this,a)})},arraylize:function(a){var b=f("li",a).length,c="";return f("li",a).each(function(a){""!==this.id&&(c+=this.id?this.id:this.innerHTML),a!==b-1&&""!==this.id&&(c+=",")}),c},getSubTree:function(a){var b={},c=this;return a.each(function(a){b[a]={order:a+1,id:null!==this.getAttribute("data-fc-id")?this.getAttribute("data-fc-id"):this.id,name:null!==this.getAttribute("data-fc-name")?this.getAttribute("data-fc-name"):this.id,subtree:c.getSubTree(f(this).find("> ol").find("> li"))}}),b},serialize:function(a){return this.getSubTree(f("#"+a.id+"> li"))},fillInput:function(a,c){"object"==typeof c&&(c=JSON.stringify(c)),b.getElementById(a).value=c},sendAjax:function(a,b){var c=JSON.stringify(b);f.ajax({url:a,type:"POST",data:{data:c},dataType:"json"})},autobind:function(a,b){var c,e={},g=Math.random(1e3).toString(),h=this;""===a.id&&(a.id="sortable-"+g.replace(".","")),"nested"===a.getAttribute("data-fc-type")&&(f(a).addClass("js-sortable"),e.nested=!0),this.addEmptyList(a),this.hideEmptyList(a),e.isValidTarget=this.isValidTarget,e.addEmptyList=this.addEmptyList,e.showEmptyList=this.showEmptyList,e.hideEmptyList=this.hideEmptyList,e.afterMove=this.afterMove,e.onDrop=this.onDrop,e.onDrag=this.onDrag,e.onDragStart=this.onDragStart,null!==a.getAttribute("data-fc-handle")&&(e.handle=a.getAttribute("data-fc-handle")),c=d.mergeOptions(h.oDefault,e),h.oTarget[b]=f(a).sortable(c),d.removeLoading(a)}}})}(window,document,oGlobalSettings,FrontendTools,FrontendCore,$);