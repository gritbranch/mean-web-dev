(function (global) {
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        app: {
            main: './bootstrap.js',
            defaultExtension: 'js'
        },
        rxjs: {
            defaultExtension: 'js',
            main: 'Rx.js'
        }
    };

    // map tells the System loader where to look for things
    var map = {
        // angular bundles
        '@angular': 'lib/@angular',
        // other libraries
        'rxjs': 'lib/rxjs'
    };

    var ngPackageNames = [
        // paths serve as alias
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'router',
        'platform-browser',
        'platform-browser-dynamic',
        ];

    ngPackageNames.forEach(function (pkgName) {
        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};

        map['@angular/' + pkgName + '/testing'] = 'lib/@angular/' + pkgName + '/bundles/' + pkgName + '-testing.umd.js';
    });

    System.config({
        defaultJSExtension: true,
        transpiler: null,
        packages: packages,
        map: map
    });

})(this);