System.config({
    packages: {
        "@iota-pico": { defaultExtension: "js" }
    },
    "map": {
        "@iota-pico": "../../node_modules/@iota-pico"
    }
});

var consoleDiv = document.getElementById("console");

var oldConsoleLog = console.log;
console.log = function(message) {
    if (message) {
        consoleDiv.innerHTML += "<br>" + message.replace("\t", "&nbsp;&nbsp;&nbsp;").replace("\r\n", "<br>");
    } else {
        consoleDiv.innerHTML += "<br>";
    }
    oldConsoleLog(message);
};