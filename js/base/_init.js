onDomReady(function () {

	require(['devicePackage'], function() {
		FrontendCore.domBoot(function (aModulesData) {
			for (var nKey = 0; nKey < aModulesData.length; nKey++) {
				FrontendTools.trackEvent('JS_Libraries', 'execute', aModulesData[nKey].name);
			}
		});
	});

	if ( oGlobalSettings.bResponsiveImages === true ) {
		FrontendCore.requireAndStart('responsive-images');
		FrontendTools.trackEvent('JS_Libraries', 'execute', 'responsive-images' );
	}

	if ( oGlobalSettings.bCart === true ) {
		FrontendCore.requireAndStart('cart');
		FrontendTools.trackEvent('JS_Libraries', 'execute', 'cart' );
	}

});