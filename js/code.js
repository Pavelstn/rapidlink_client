 $(document).ready(function(){
   //var redirectURL= "http://google.com?q=";
   var redirectURL= "http://localhost";
   var uid="1233";
   $('a').live('click', function() {
   var thelink = $(this);
   var old_adress= thelink.attr('href');
   
   var b64= Base64.encode(old_adress);
   
   //window.location.href = redirectURL+code;
   //window.location.href = redirectURL+Base64.decode(code);
   window.location.href=redirectURL+"?"+"b64="+b64+"&uid="+uid;
   return false;
  });

});