// CSS loading ----------------------------------------------------------------

require('font-awesome/css/font-awesome.css');
require('normalize.css');
require('tonic-widgets/lib/css/state.css');

// Dependencies injections ----------------------------------------------------

var Factory = require('./factory.js'),
    iOS = /iPad|iPhone|iPod/.test(navigator.platform);

// Add class to body if iOS device --------------------------------------------

if(iOS) {
    document.querySelector('body').classList.add('is-ios-device');
}

// Expose viewer factory method -----------------------------------------------

export function load(url, container) {
    Factory.createViewer(url, function(viewer) {
        if(!viewer) {
            return alert("The metadata format seems to be unsupported.");
        }

        Factory.createUI(viewer, container);
    });
}
