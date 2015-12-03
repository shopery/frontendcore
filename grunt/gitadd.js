var pkg = require('../package.json'),
	configBase = function( sComponent, grunt ) {
		var sRouteComponent = "components/" + sComponent + "/",
			oBaseConfig = {
				options: {
					cwd: sRouteComponent,
				},
				files: {
					src: ["./"]
				}
			};

		return oBaseConfig;
	},
	configComponent = function(grunt) {

		var oConfig = {
			options: {
				verbose: true,
				all: true,
				force: false
			}
		};

		for (var nKey = 0; nKey < pkg.components.length; nKey++){

			oConfig[pkg.components[nKey]] = configBase(pkg.components[nKey], grunt);
		}

		return oConfig;
	};

module.exports = function(grunt) {
	return configComponent(grunt);
};

