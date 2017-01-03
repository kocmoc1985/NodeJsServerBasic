//Serial loop - slower
//var fs = require('fs');
//var walk = function(dir, done) {
//  var results = [];
//  fs.readdir(dir, function(err, list) {
//    if (err) return done(err);
//    var i = 0;
//    (function next() {
//      var file = list[i++];
//      if (!file) return done(null, results);
//      file = dir + '/' + file;
//      fs.stat(file, function(err, stat) {
//        if (stat && stat.isDirectory()) {
//          walk(file, function(err, res) {
//            results = results.concat(res);
//            next();
//          });
//        } else {
//          results.push(file);
//          next();
//        }
//      });
//    })();
//  });
//};

//Parallel loop - fastest
var fs = require('fs');
var path = require('path');
var walk = function (dir, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err)
            return done(err);
        var pending = list.length;
        if (!pending)
            return done(null, results);
        list.forEach(function (file) {
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err, res) {
                        results = results.concat(res);
                        if (!--pending)
                            done(null, results);
                    });
                } else {
                    results.push(file);
                    if (!--pending)
                        done(null, results);
                }
            });
        });
    });
};

//walk("www", function(err, results) {
//  if (err) throw err;
//  console.log(results);
//});



var searchA = "";
findFile("www", "menu-mobile.png", setSearchA);

function findFile(path, fileNameWithExt, fn) {
    walk(path, function (err, results) {//process.env.HOME
        //
        if (err)
            throw err;
        //
        for (var i = 0; i < results.length; i++) {
            console.log(results[i]);

            if (stringContains(results[i], fileNameWithExt)) {
               fn(results[i]);
            }
        }
    });
}

function setSearchA(value) {
    searchA = value;
    console.log("value:" + searchA);
}

function stringContains(string, searched_string) {
    if (string.indexOf(searched_string) > -1) {
        return true;
    } else {
        return false;
    }
}


//console.log(findFile("www", "menu-mobile.png"));

//console.log(stringContains("www/navbars/navbarA/icons/menu-mobile.png","menu-mobile.png"));