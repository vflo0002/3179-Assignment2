var specVis1 = "./js/states.vg.json";
var specVis2 = "./js/agestate.vg.json";
var specVis3 = "./js/gender.vg.json";
var specVis4 = "./js/offencebyyear.vg.json";
var specVis5 = "./js/SAgenderinteractive.vg.json";


vegaEmbed('#states', specVis1, {
    "actions": false
});

vegaEmbed('#agestate', specVis2, {
    "actions": false
}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#test', specVis3, {
    "actions": false
}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#offencebyyear', specVis4, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed('#SAgenderinteractive', specVis5, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

