// Config.debug = true;
UIBar.destroy(); /* gets rid of all the annoyin' twine UI */
Config.passages.nobr = true;
Config.history.maxStates = 1; // No story capabilities

// Load data once when game loads
$(document).one(':passageinit ', async function () {
    Engine.Instance.load();
})

// Click handlers
$(document).on(':passagedisplay', function () {
    Engine.Instance.initEvents();
});
