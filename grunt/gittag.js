var pkg = require('../package.json'),
	configBase = function( sComponent, grunt) {
		var sRouteComponent = "components/" + sComponent + "/",
			sBowerPath = sRouteComponent + 'bower.json',
			pkgComponent = grunt.file.exists(sBowerPath) ? require( "../" + sBowerPath) : { version: "0.0.1", lastFeature: "none" },
			oBaseConfig = {
				options: {
					cwd: sRouteComponent,
					tag: pkgComponent.version,
					message: "Tag version " + pkgComponent.version,
					force: true
				},
			};

		return oBaseConfig;
	},
	configComponent = function(grunt) {

		var oConfig = {
			options : {
				allowEmpty: true,
				verbose: true
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

