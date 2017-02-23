// main rjs component
requirejs.config({
    baseUrl: './'
    , paths: {
        'text': 'node_modules/requirejs-text/text'
        , 'lib': 'node_modules/renaissance/lib'
        , 'templates': 'templates'
    }
});

require(
    [
        //
    ]
    , function() {
        require(['scripts/rjs/page'], function(initialize) { // scripts
            initialize();
        });
    }
);
