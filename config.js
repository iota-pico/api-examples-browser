System.config({
    "packages": {
        "": { defaultExtension: "js" }
    },
    "map": {
        "plugin-json": "../../node_modules/systemjs-plugin-json/json.js",
        "@iota-pico": "../../node_modules/@iota-pico"
    },
    "meta": {
        "*.json": { "loader": "plugin-json" }
    }
});

var consoleDiv = document.getElementById("console");

var oldConsoleLog = console.log;
console.log = function(message) {
    if (message) {
        consoleDiv.innerHTML += "<br/>" + message.replace(/\t/g, "&nbsp;&nbsp;&nbsp;").replace(/\r/g, "").replace(/\n/g, "<br/>");
        oldConsoleLog(message);
    } else {
        consoleDiv.innerHTML += "<br/>";
    }
};

