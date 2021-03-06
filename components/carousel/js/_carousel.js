;(function (window, document, oGlobalSettings, FrontendTools, FrontendCore, $) {
	'use strict';

	FrontendCore.define('carousel', [], function () {
		return {
			oDefault: {
				baseClass: 'carousel',
				items: 1,
				nav: true,
				navText: ['', ''],
				loop: true,
				margin: 10,
				merge: false,
				video: true,
				lazyLoad: true,
				videoWidth: '100%', // Default false; Type: Boolean/Number
				videoHeight: 300, // Default false; Type: Boolean/Number
				center: true,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true
			},
			onStart: function () {

				var aTargets = FrontendTools.getDataModules('carousel'),
					self = this;

				FrontendTools.loadCSS( oGlobalSettings.sPathCss + 'secondary.css?v=' + oGlobalSettings.sHash );

				FrontendTools.trackModule('JS_Libraries', 'call', 'carousel');

				$(aTargets).each(function () {
					self.autobind(this);
				});


			},
			autobind: function (oTarget) {

				var self = this,
					oSettings,
					oOptions = {},
					sProperty,
					aDeviceItems,
					sClass = 'carousel';

				FrontendTools.removeLoading(oTarget);

				$('.carousel-video', oTarget).each(function () {
					$(this).addClass('owl-video');
				});

				for (sProperty in self.oDefault) {

					if (oTarget.getAttribute("data-fc-" + sProperty) !== null) {
						oOptions[sProperty] = oTarget.getAttribute("data-fc-" + sProperty);
					}

				}

				switch ( oTarget.getAttribute("data-fc-controls") ) {
					case "false":
						sClass += ' _controls-hidden';
					break;
					case "hover":
						sClass += ' _controls-hover';
						/* falls through */
					case "inside":
						sClass += ' _controls-inside';
					break;
					default:
					case "true":
					break;
				}

				if (oTarget.getAttribute("data-fc-controls") !== null) {
					oOptions.videoHeight = oTarget.getAttribute("data-fc-video-height");
				}

				if (oTarget.getAttribute("data-fc-center") !== null && oTarget.getAttribute("data-fc-center") === 'false') {
					oOptions.center = false;
				}

				if (oTarget.getAttribute("data-fc-autoplay") !== null && oTarget.getAttribute("data-fc-autoplay") === 'false') {
					oOptions.autoplay = false;
				}

				if (oTarget.getAttribute("data-fc-video-height") !== null) {
					oOptions.videoHeight = oTarget.getAttribute("data-fc-video-height");
				}

				if (oTarget.getAttribute("data-fc-video-width") !== null) {
					oOptions.videoWidth = oTarget.getAttribute("data-fc-video-width");
				}

				if (oTarget.getAttribute("data-fc-items-width") !== null){
					oOptions.items = Math.floor(oTarget.clientWidth/oTarget.getAttribute("data-fc-items-width"));
				}

				if (oTarget.getAttribute("data-fc-device-items") !== null) {

					aDeviceItems = oTarget.getAttribute("data-fc-device-items").split(',');

					oOptions.responsive = {
						'0': {
							items: parseInt(aDeviceItems[0], 10),
							nav: false
						},
						'765': {
							items: parseInt(aDeviceItems[1], 10),
							nav: true
						},
						'980': {
							items: parseInt(aDeviceItems[2], 10),
							nav: true
						}
					};
				}

				if (oTarget.getAttribute("data-fc-items-width") !== null){
					oOptions.items = Math.floor(oTarget.clientWidth/oTarget.getAttribute("data-fc-items-width"));
				}

				$(oTarget).addClass(sClass);

				oSettings = FrontendTools.mergeOptions(self.oDefault, oOptions);

				if (oSettings.lazyLoad === true || oSettings.lazyLoad === 'true') {
					$('img', oTarget).each(function () {
						if (this.getAttribute('data-src') !== null || this.getAttribute('data-src-retina') !== null) {
							$(this).addClass('owl-lazy animated fade-in');
						}
					});
				}

				if (oSettings !== undefined) {
					$(oTarget).owlCarousel(oSettings);
				}

			},
			onStop: function () {
				this.sPathCss = null;
				this.oDefault = null;
			},
			onDestroy: function () {
				delete this.sPathCss;
				delete this.oDefault;
			}
		};
	});

})(window, document, oGlobalSettings, FrontendTools, FrontendCore, $);
