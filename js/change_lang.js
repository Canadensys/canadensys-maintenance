/*!
 * JavaScript For index.html Canadensys
 * Released under the GPL2 license
 */
 
var Cookies2 = Cookies.noConflict();
 
$(document).ready(function () {
    
    /* Languages from url */
    var l = location.href+ "";
    var sl = foundLanguage(l);
    if (sl == '') {
        sl = "en";
    }
    showlanguage(sl);
    addCurrentDate(sl);
    createCookie('language_index', sl, 365);
    addCurrentDate(sl);
    /*
    if(l.indexOf("explorer.canadensys.net/search") > -1) {
        $("#t2").hide();
        $("#t3").hide();
        $("#t4").hide();
    }
    if(l.indexOf("explorer.canadensys.net/occurrences/") > -1 || 
       l.indexOf("explorer.canadensys.net//occurrence/search") > -1) {
        $("#advancedSearchLink").hide();
    }
    */
    
});

//
// Languages selection
//

function showlanguage(l){
    if (l == 'en') {
        //console.log(l);
        $(".en").show();
        $(".fr").hide();
    }else if (l =='fr') {
        //console.log(l);
        $(".en").hide();
        $(".fr").show();
    }
}

function createCookie(name, value, days) {
    Cookies2.set(name,value, { expires: days, path: '' });
}

function readCookie(name) {
    return Cookies2.get(name);
}

function eraseCookie(name) {
    Cookies2.remove(name);
}

$( "#fr-lang" ).click(function() {
    redirectURL("fr");
});

$( "#en-lang" ).click(function() {
    redirectURL("en");
});

$( "#fr-lang-xs" ).click(function() {
    redirectURL("fr");
});

$( "#en-lang-xs" ).click(function() {
    redirectURL("en");
});

//
// Change language and redirect and keep options
//

// Language function
function redirectURL(lang) {
    var l = location.href+"";
    var ilang = foundLanguage(l);
    var regex = new RegExp('lang='+ilang);
    var nlang = "lang="+lang;
    var s = "";
    if (ilang == '') {
        var li = l.lastIndexOf("?");
        //console.log(li);
        if (li == -1) {
            la = l.lastIndexOf("#");
            if (la == -1) {
                s = l+'?'+nlang;
            } else {
                var lb = l.indexOf("#");
                var lt = l.length; 
                var bf = l.substring(0, lb);
                var af = l.substring(lb + 1,lt);
                
                s = bf+"?"+nlang+"#"+af
            }
        } else {
            var lb = l.indexOf("?");
            var lt = l.length; 
            var bf = l.substring(0, lb);
            var af = l.substring(lb + 1,lt);
            
            s = bf+"?"+nlang+'&'+af
        }
    } else {
        s = l.replace(regex, nlang);
    }
    window.location.href = s;
    createCookie('language_index', nlang, 365);
}

function foundLanguage(s) {
    if (s.search(/[\?,&]lang=fr/)>=0){
        return "fr";
    } else if (s.search(/[\?,&]lang=en/)>=0){
        return "en";
    } else {
        return "";
    }
}

//
// Get current date
//

function addCurrentDate(sL) {
    var today = new Date();
    var options = {
        weekday: "long", year: "numeric", month: "long", day: "2-digit"
    };
    if (sL == 'fr') {
        $('.currentdate').text(today.toLocaleDateString("fr-fr", options));
    } else {
        $('.currentdate').text(today.toLocaleDateString("en-en", options));
    }
}

