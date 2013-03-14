wobexpanded = false;
nav = false;
expanded = false;

$(document).ready(function () {
	contentArea();
	holotoggle();
	links();
	changeTabs();
	openNav();
	
	$(".tabs-full li").fastClick(function () {
		$("section.content, .tabs-full li").removeClass("selected");
		$($(this).attr("data-load")).addClass("selected");
		$(this).addClass("selected");
	});
	
	
	
	
})

function slider() {
	$('.slides').iosSlider({
		scrollbar: false,
		snapToChildren: true,
		desktopClickDrag: true,
		navSlideSelector: $('.tabs-full li'),
		onSlideChange: slideContentChange
	});
}
function slideContentChange(args) {
	/* indicator */
	$('.tabs-full li').removeClass('selected');
	$('.tabs-full li:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
	if(args.currentSlideNumber == 0){
		//shakeCards()
		
	}
}

function links() {
	$(".link").fastClick(function () {
		$("#nav").hide();
		$(".popup, .overlay").hide();
		$(".popup,.overlay").css("opacity","0");
		
		card = $(this).attr("data-load");
		
		// ZOOM TRANSITION CLODE

		if($(this).hasClass("zoom")){
			transitionZoom(card);
		}
		if($(this).hasClass("close-zoom")){
			transitionCloseZoom(card);
		}
		
		if($(this).hasClass("slide")){
			transitionSlide(card);			
		}
		if($(this).hasClass("close-slide")){
			transitionCloseSlide(card);
		}
		if($(this).hasClass("slide3d")){
			transitionSlide3D(card);			
		}
		if($(this).hasClass("close-slide3d")){
			transitionCloseSlide3D(card);
		}
		if(!$(this).hasClass("slide") && !$(this).hasClass("zoom") && !$(this).hasClass("close-slide") && !$(this).hasClass("close-zoom") && !$(this).hasClass("slide3d") && !$(this).hasClass("close-slide3d")) {
			loadActivity(card);
		}
				
		contentArea();	
	})
	$(".openpop").fastClick(function () {
		card = $(this).attr("data-load");
		$(".popup, .overlay").css("opacity","0");
		$(".overlay").show();
		$(card ).css("opacity","0");
		$(card).show();
		$(".overlay").transition({opacity:1},300);
		$(card).transition({opacity:1},600);
	})
	
	
	$(".opencoach").fastClick(function () {
		card = $(this).attr("data-load");
		$(card).css("opacity","0");
		$(card).show();
		$(card).transition({opacity:1},600);
	})
	
	$(".coachmark .close").fastClick(function () {
		$(".coachmark").transition({opacity:0},300,function () {
			$(".coachmark").hide();
			
		});
	})
	
	$(".opennav").fastClick(function () {
		if(!wobexpanded){
			card = $(this).attr("data-load");
			
			if(nav){
				$(".activity").transition({x:"0"},300, function() {
					nav = false;
					$(this).removeAttr("style");
					$("#nav").hide();
				});
				
			}
			if(!nav){
				$("#nav").show();
				$(".activity").transition({x:"300px"},300, function () {
					nav = true;
					
				});
				
			}
		}
		if(wobexpanded){
			$(".wob").show();
			$(".wob .expanded").hide();
			$(".wob .expanded").css("-webkit-transform","rotateX(-100deg)");
			
			gg = setTimeout(function () {wobexpanded = false}, 100);
		}
	})
	$("#nav li").fastClick(function () {
		card = $(this).attr("data-load");
		
		if(card){
			loadActivity(card);
			
			$("#nav li").removeClass("selected");
			$(this).addClass("selected");
						
			$(".activity").transition({x:"0"},300, function() {
				nav = false;
				$(this).removeAttr("style");
				
			});
		}
		
		
	})
	
}


window.onresize = function () {
	contentArea();
}


function transitionSlide3D(card) {
	$(card).addClass("second");
		$(".activity.selected").addClass("first");
		
		$(card).addClass("selected");
		
		
		contentArea();	
		side = "translateX(" + $(window).width() + "px)";
		move = 	"-" + ($(window).width()/2) +"px";
		
		$(card).css("-webkit-transform", side);
	
		$(".first").transition({x:move, scale:"0.9"}, 300, 'ease', function () {});
		$(card).transition({x:0, scale:1 },300, 'ease', function () {
			$(".first").removeClass("selected");
			$(".first").css("opacity","1");
			$(".first").css("-webkit-transform","translateX(0)");
			$(".first").removeClass("first");
			$(".second").removeClass("second");
			$(".activity").removeAttr("style");
			back = true;
		});
	
}
function transitionCloseSlide3D(card) {
		$(card).addClass("second");
		$(".activity.selected").addClass("first");
		
		$(card).addClass("selected");
		
		
		contentArea();	
		
		side = "translateX(-" + ($(window).width()/2) + "px) scale(0.9)";
		move = 	$(window).width() +"px";
		
		$(card).css("-webkit-transform", side);
	
		$(".first").transition({x:move},300, 'ease', function () {});
		$(card).transition({x:0, scale:1,  rotateY: '0'},300, 'ease', function () {
			$(".first").removeClass("selected");
			$(".first").css("opacity","1");
			$(".first").css("-webkit-transform","translateX(0)");
			$(".first").removeClass("first");
			$(".second").removeClass("second");
			$(".activity").removeAttr("style");
			back = true;
		});
	
}
function transitionSlide3D2(card) {
	$(card).addClass("second");
		$(".activity.selected").addClass("first");
		
		$(card).addClass("selected");
		
		
		contentArea();	
		side = "translateX(" + $(window).width() + "px)";
		move = 	"-" + $(window).width() +"px";
		
		$(card).css("-webkit-transform", side);
	
		$(".first").transition({x:move, perspective:'400px',  rotateY: '30deg'}, 400, 'ease', function () {});
		$(card).transition({x:0, scale:1 },300, 'ease', function () {
			$(".first").removeClass("selected");
			$(".first").css("opacity","1");
			$(".first").css("-webkit-transform","translateX(0)");
			$(".first").removeClass("first");
			$(".second").removeClass("second");
			$(".activity").removeAttr("style");
			back = true;
		});
	
}

function transitionCloseSlide3D2(card) {
		$(card).addClass("second");
		$(".activity.selected").addClass("first");
		
		$(card).addClass("selected");
		
		
		contentArea();	
		
		side = "translateX(-" + $(window).width() + "px) rotateY(30deg)";
		move = 	$(window).width() +"px";
		
		$(card).css("-webkit-transform", side);
	
		$(".first").transition({x:move},300, 'ease', function () {});
		$(card).transition({x:0, scale:1,  rotateY: '0'},300, 'ease', function () {
			$(".first").removeClass("selected");
			$(".first").css("opacity","1");
			$(".first").css("-webkit-transform","translateX(0)");
			$(".first").removeClass("first");
			$(".second").removeClass("second");
			$(".activity").removeAttr("style");
			back = true;
		});
	
}

function transitionSlide(card) {
	$(card).addClass("second");
		$(".activity.selected").addClass("first");
		
		$(card).addClass("selected");
		
		
		contentArea();	
		side = "translateX(" + $(window).width() + "px)";
		move = 	"-" + $(window).width() +"px";
		
		$(card).css("-webkit-transform", side);
	
		$(".first").transition({x:move},300, 'ease', function () {});
		$(card).transition({x:0, scale:1 },300, 'ease', function () {
			$(".first").removeClass("selected");
			$(".first").css("opacity","1");
			$(".first").css("-webkit-transform","translateX(0)");
			$(".first").removeClass("first");
			$(".second").removeClass("second");
			$(".activity").removeAttr("style");
			back = true;
		});
	
}
function transitionCloseSlide(card) {
		$(card).addClass("second");
		$(".activity.selected").addClass("first");
		
		$(card).addClass("selected");
		
		
		contentArea();	
		
		side = "translateX(-" + $(window).width() + "px)";
		move = 	$(window).width() +"px";
		
		$(card).css("-webkit-transform", side);
	
		$(".first").transition({x:move},300, 'ease', function () {});
		$(card).transition({x:0, scale:1 },300, 'ease', function () {
			$(".first").removeClass("selected");
			$(".first").css("opacity","1");
			$(".first").css("-webkit-transform","translateX(0)");
			$(".first").removeClass("first");
			$(".second").removeClass("second");
			$(".activity").removeAttr("style");
			back = true;
		});
	
}

function transitionZoom(card) {
	$(card).addClass("top");
	$(".activity.selected").addClass("behind");
	$(card).css("-webkit-transform","scale3d(0.6, 0.6, 1)");
	$(card).addClass("selected");
	//$(card).css("z-index","100000000");
	$(card).transition({scale:"1.0",x:"0px"},200, 'ease', function () {
		$(".activity.selected").removeClass("selected");
		$(".top").addClass("selected");
		$(".top").removeClass("top");
		$(".activity").removeAttr("style");
		back = true;
	});	
}
function transitionCloseZoom(card) {
			$(".activity.selected").addClass("old");
			
			$(card).addClass("selected");				
			//$(card).css("z-index","100000000");
			
			$(".old").transition({scale:"0.6", opacity:0},200, 'ease', function () {
				$(".old").removeClass("selected");
				$(".old").css("opacity","1");
				$(".old").css("-webkit-transform","scale(1) !important");
				$(".old").removeClass("old");
				$(".activity").removeAttr("style");
			});	
}

function loadActivity(card) {		
	$(".activity").removeClass("selected");
	$(card).addClass("selected");
}
function contentArea() {
	$(".activity").height($(window).height());
	cHeight = $(window).height() - $(".action-bar").height();	
	
	cHeightTabs = $(window).height() - $(".action-bar").height() - $(".tabs-full").height();
	
	$(".content").height(cHeight);
	
	$(".hastabs .content, .slider, .slides").height(cHeightTabs);
	
	
	slider()
	
}
function holotoggle() {
	$(".toggle .off").click(function () {
		$(this).removeClass("off").addClass("on").text("On");
		holotoggle()
	})
	$(".toggle .on").click(function () {
		$(this).removeClass("on").addClass("off").text("Off");
		holotoggle()
	})
}
