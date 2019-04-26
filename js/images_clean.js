/*!
 * JavaScript For index.html Canadensys
 * Released under the GPL2 license
 */

$(document).ready(function () {
    var l = location.href+ "";
    if(l.indexOf("images.canadensys.net/") > -1) {
        var els = document.querySelectorAll("a[href='/admin/index']");
        imagesHide(els);
    }
    if(l.indexOf("images.canadensys.net/image/") > -1) {
        var els = document.querySelectorAll("a[href='#tabUserDefined']");
        imagesHide(els);
        els = document.querySelectorAll("a[href='#tabAuditMessages']");
        imagesHide(els);

        var a = ['btnDeleteImage','btnRegen','tagsSection'];
        var aL = a.length;
        for (var i = 0; i < aL; i++) {
            var el = document.getElementById(a[i])
            if (el != null){
                if (a[i]=='tagsSection'){
                    el = el.parentNode;
                }
            /*if (el != null){*/
                el.style.display = 'none';
            }
        }
        var harv = document.getElementsByName("_chkIsHarvestable").item(0);
        if (harv != null){
            var harvPar = harv.parentNode.parentNode;
            harvPar.style.display = "none";
        }
    }
});

function imagesHide(els){
    for (var i = 0, l = els.length; i < l; i++) {
        var el = els[i];
        var par = el.parentNode;
        par.style.display = "none";
    }
}
