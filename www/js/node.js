


function node_client_execute_select() {
    $.ajax({
        async: "true", //is true by default
        type: "POST",
        url: "http://localhost:3000/executeSelect",
        data: {query: "select * from articles"}
    }).done(function (rowsAsJson) {
        processNodeResponseB(rowsAsJson);
    });
}

function processNodeResponseB(response_rows) {
    var randomInt = getRandomInt(1, 6);
    //
    var elemh3 = createElement("h3");
    setTextB(elemh3, "Node.js response: " + response_rows[randomInt].title);
    //
    var elemArticle = createElement("article");
    addElementB(elemArticle, elemh3);
    //
    var response_p = "<p>" + response_rows[randomInt].text + "</p>";
    addElementB(elemArticle, response_p);
    //
    insertFirst(elemArticle, getElement("content"));
    //
    adjustSideBarHeight();
}

function node_client_connect_db() {
    $.ajax({
        async: "true", //is true by default
        type: "POST",
        url: "http://localhost:3000/connectMySql",
        data: {ip: "localhost", user: "root", pass: "", database: "vedalife_se"}
    }).done(function (msg) {
        processNodeResponse(msg);
    });
}

function node_client_SendPostRequest() {
    $.ajax({
        async: "true", //is true by default
        type: "POST",
        url: "http://localhost:3000/nodeTest",
        data: {param1: "Node.js", param2: "test successful"}
    }).done(function (msg) {
//        alert("Data Saved: " + msg);
        processNodeResponse(msg);
    });
}

function processNodeResponse(response) {
    //
    var elemh3 = createElement("h3");
    setTextB(elemh3, "Node.js response");
    //
    var elemArticle = createElement("article");
    addElementB(elemArticle, elemh3);
    //
    var response_p = "<p>" + response + "</p>";
    addElementB(elemArticle, response_p);
    //
    insertFirst(elemArticle, getElement("content"));
    //
    adjustSideBarHeight();
}