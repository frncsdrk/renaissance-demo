// main rjs component
requirejs.config({
    baseUrl: './'
    , paths: {
        'text': 'node_modules/requirejs-text/text'
        , 'renaissance': 'node_modules/renaissance/renaissance'
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
