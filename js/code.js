$(document).ready(function(){
    //var redirectURL= "http://google.com?q=";
    var redirectURL= "http://localhost:3000/link/index";
    var uid="1233";
    var blacklist=["twitter","bash.org.ru", "joomla"];
    $('a').live('click', function() {
        var thelink = $(this);
        var old_adress= thelink.attr('href');
        var rflag=1;
        var b64= Base64.encode(old_adress);
        for(i=0;i<blacklist.length;i++){
            var regex = new RegExp(blacklist[i], "gi");
            var result= regex.exec(old_adress);
            if(result){
                rflag=null;
                window.location.href=old_adress;
            }
        }
        if(rflag) window.location.href=redirectURL+"?"+"b64="+b64+"&uid="+uid;
        return false;
    });

});