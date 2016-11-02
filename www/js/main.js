//==============================================================================
//==============================================================================

//Executes first
$(document).ready(function () {
    initialize();
});

//Executes last
$(window).load(function () {

});


//==============================================================================
//==============================================================================

function initialize() {

}

//==============================================================================
//==============================================================================


function getJsonFromUrlSync(url) {
    //
    var jsonStr = $.ajax({
        url: url,
        dataType: 'json',
        async: false
    }).responseText;
    //
    return JSON.parse(jsonStr);
}

function includeHtml(url, selector, addType) {
    //
    var html = $.ajax({
        url: url,
        dataType: 'text',
        async: false
    }).responseText;
    //
    if (addType === "append") {
        $(selector).append(html);
    } else if (addType === "prepend") {
        $(selector).prepend(html);
    } else if (addType === "after") {
        $(selector).after(html);
    } else if (addType === "before") {
        $(selector).before(html);
    } else {
        $(selector).append(html);
    }
}

function includeHtmlAsync(url, selector, addType) {
    $.ajax({
        url: url,
        dataType: 'text',
        async: false
    }).done(function (msg) {
        if (addType === "append") {
            $(selector).append(msg);
        } else if (addType === "prepend") {
            $(selector).prepend(msg);
        } else if (addType === "after") {
            $(selector).after(msg);
        } else if (addType === "before") {
            $(selector).before(msg);
        } else {
            $(selector).append(msg);
        }
    });
}

//==============================================================================
//==============================================================================

function getRandomInt(betweenA, betweenB) {
    return Math.floor((Math.random() * betweenB) + betweenA);
}

//==============================================================================
//==============================================================================

function isScrolledIntoView(selector) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(selector).offset().top;
    var elemBottom = elemTop + $(selector).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function isVisible(selector) {
    return $(selector).is(':visible');
}