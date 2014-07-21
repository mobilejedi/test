$(document).on("pagecreate","#pageone",function(){
  $("img").on("swiperight", function(){
     // $.mobile.changePage( "detail.html",  { transition: "slide", reverse: true }, true, true);
	  $(this).fadeTo("slow", 1);
	  $.mobile.changePage( "detail.html",  { transition: "slide", reloadPage: true });
	  
	  //$(this).hide();
  });                       
});




  
  $(function showMenu(){
	    var menuStatus;
	    
	    $("a.showMenu").click(function(){
	        if(menuStatus != true){                
	        $(".ui-page-active").animate({
	            marginLeft: "165px",
	          }, 300, function(){menuStatus = true});
	          return false;
	          } else {
	            $(".ui-page-active").animate({
	            marginLeft: "0px",
	          }, 300, function(){menuStatus = false});
	            return false;
	          }
	    });
	 
	    $("#menu li a").click(function(){
	        var p = $(this).parent();
	        if($(p).hasClass('active')){
	            $("#menu li").removeClass('active');
	        } else {
	            $("#menu li").removeClass('active');
	            $(p).addClass('active');
	        }
	    });
	        
	});




