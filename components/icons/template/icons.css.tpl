/* Generated by FrontendCore */

@-webkit-keyframes icon-spin {
0% {
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100% {
-webkit-transform: rotate(359deg);
transform: rotate(359deg);
}
}
@keyframes icon-spin {
0% {
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100% {
-webkit-transform: rotate(359deg);
transform: rotate(359deg);
}
}

<% if (fontfaceStyles) { %>
<% if (fontSrc1 && embed.length) { %>
@font-face {
    font-family:"<%= fontBaseName %>";
    src:<%= fontSrc1 %>;
    font-weight:normal;
    font-style:normal;
}
<% } %>@font-face {
	font-family:"<%= fontBaseName %>";<% if (fontSrc1) { %>
	src:<%= fontSrc1 %>;<% }%>
	src:<%= fontSrc2 %>;
	font-weight:normal;
	font-style:normal;
}
<% } %>

[class^="<%= classPrefix %>"]._fw:before,
[class*=" <%= classPrefix %>"]._fw:before {
	width: 1.28571429em;
	text-align: center;
	display: inline-block;
}

[class^="<%= classPrefix %>"]._spin:before,
[class*=" <%= classPrefix %>"]._spin:before {
	animation: icon-spin 2s infinite linear;
	-webkit-animation: icon-spin 2s infinite linear;
}

[class^="<%= classPrefix %>"]._pulse:before,
[class*=" <%= classPrefix %>"]._pulse:before {
	animation: icon-spin 1s infinite steps(8);
	-webkit-animation: icon-spin 1s infinite steps(8);
}

<% if (baseStyles) { %>
/* Bootstrap Overrides */
[class^="<%= classPrefix %>"]:before,
[class*=" <%= classPrefix %>"]:before<% if (ie7) {%>,
[class^="<%= classPrefix %>"],
[class*=" <%= classPrefix %>"]<% } %><% if (addLigatures) { %>,
.ligature-icons<% } %> {
	font-family:"<%= fontBaseName %>";
	display:inline-block;
	vertical-align:middle;
	line-height:1;
	font-weight:normal;
	font-style:normal;
	speak:none;
	text-decoration:inherit;
	text-transform:none;
	text-rendering:auto;
	-webkit-font-smoothing:antialiased;
	-moz-osx-font-smoothing:grayscale;
}<% } %>
<% if (iconsStyles && stylesheet === 'less') { %>
/* Mixins */
<% for (var glyphIdx = 0; glyphIdx < glyphs.length; glyphIdx++) { %>
.<%= classPrefix %><%= glyphs[glyphIdx] %><% if(glyphIdx === glyphs.length-1) { %> { <% } else { %>, <% } } %>
	&:before {
		font-family:"<%= fontBaseName %>";
		display:inline-block;
		font-weight:normal;
		font-style:normal;
		text-decoration:inherit;
	}
}<% } %>
<% if (extraStyles) { %>
a [class^="<%= classPrefix %>"],
a [class*=" <%= classPrefix %>"] {
	display:inline-block;
	text-decoration:inherit;
}
/* Makes the font 33% larger relative to the icon container */
.<%= classPrefix %>large:before {
	vertical-align:top;
	font-size:1.333em;
}
/* Keeps button heights with and without icons the same */
.btn [class^="<%= classPrefix %>"],
.btn [class*=" <%= classPrefix %>"] {
	line-height:0.9em;
}
li [class^="<%= classPrefix %>"],
li [class*=" <%= classPrefix %>"] {
	display:inline-block;
	text-align:center;
}
/* 1.5 increased font size for <%= classPrefix %>large * 1.25 width */
li .<%= classPrefix %>large[class^="<%= classPrefix %>"],
li .<%= classPrefix %>large[class*=" <%= classPrefix %>"] {
	width:1.875em;
}
li[class^="<%= classPrefix %>"],
li[class*=" <%= classPrefix %>"] {
	margin-left:0;
	list-style-type:none;
}
li[class^="<%= classPrefix %>"]:before,
li[class*=" <%= classPrefix %>"]:before {
	text-indent:-2em;
	text-align:center;
}
li[class^="<%= classPrefix %>"].<%= classPrefix %>large:before,
li[class*=" <%= classPrefix %>"].<%= classPrefix %>large:before {
	text-indent:-1.333em;
}
<% } %>

<% if (iconsStyles) { %>/* Icons */<% for (var glyphIdx = 0; glyphIdx < glyphs.length; glyphIdx++) { %>
<% if (stylesheet === 'less') { %>
.<%= classPrefix %><%= glyphs[glyphIdx] %> {
	&:before {
		content:"<% if (addLigatures) { %><%= glyphs[glyphIdx] %><% } else { %>\<%= codepoints[glyphIdx] %><% } %>";
	}
	<% if (ie7) {%>
	*zoom: expression( this.runtimeStyle['zoom'] = '1', this.innerHTML = '&#x<%= codepoints[glyphIdx] %>;');
	<% } %>
}<% } else { %>
<% if (ie7) {%>.<%= classPrefix %><%= glyphs[glyphIdx] %> {
	*zoom: expression( this.runtimeStyle['zoom'] = '1', this.innerHTML = '&#x<%= codepoints[glyphIdx] %>;');
}
<% } %>
.<%= classPrefix %><%= glyphs[glyphIdx] %>:before {
	content:"<% if (addLigatures) { %><%= glyphs[glyphIdx] %><% } else { %>\<%= codepoints[glyphIdx] %><% } %>";
}<% } %>
<% } } %>
