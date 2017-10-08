$( document).ready( function (){

	$(".button-collapse").sideNav();
	$('.collapsible').collapsible();
    
    $(window).bind('scroll', function() {
       var navHeight = $( window ).height() - 50;
             if ($(window).scrollTop() > navHeight) {
                 $('nav').addClass('fixed');
             }
             else {
                 $('nav').removeClass('fixed');
             }
        });	
    
    $("#search-query-holder").hide();
    $("#search-query-btn").click(function() {
    	$("#search-query-holder").show();
    	$("#search-query-btn").hide();
    	$("#nav-public").hide();
    	$("#nav-examples").hide();
        $("#register").hide();
        $("#login").hide();
    });   
	$("#search-query-close").click(function() {
    	$("#search-query-holder").hide();
    	$("#search-query-btn").show();
    	$("#nav-public").show();
    	$("#nav-examples").show();
        $("#register").show();
        $("#login").show();
    });  

});