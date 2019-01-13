$(document).ready(function(){
	$("#hamburger").click(function(){
		$("#header-nav").toggleClass('active')
		$("nav ul:nth-child(2)").toggleClass('active')
		$("nav").toggleClass('active2')
		$("#hamburger-top").toggleClass('active3')
		$("#hamburger-top").toggleClass('active5')
		$("#hamburger-middle").toggleClass('active3')
		$("#hamburger-middle").toggleClass('active6')
		$("#hamburger-bottom").toggleClass('active3')
		$("#hamburger-bottom").toggleClass('active4')
	})
})

$(document).ready(function(){
$(window).on("scroll",function(){
		const winScrollTop = $(window).scrollTop();
	const salesElement = $("#sales-element1");
	const salesElement2 = $("#sales-element2");
	const salesElement3 = $("#sales-element3");
	const salesElement4 = $("#sales-element4");
	const salesElementOffsetTop = salesElement.offset().top;
	const height = $('header').height();
	const salesElementScroll = salesElementOffsetTop - height;
	if(winScrollTop > salesElementScroll){
		salesElement.css("opacity","1")
		salesElement2.css("opacity","1")
		salesElement3.css("opacity","1")
		salesElement4.css("opacity","1")
	}
})
})





$(document).ready(function(){
$(window).on("scroll",function(){
		const winScrollTop = $(window).scrollTop();
	const MainElements = $("#main-text");
	const MainElementsOffsetTop = MainElements.offset().top;
	const heightWin = $('header').height();
	const MainElementsScroll = MainElementsOffsetTop - heightWin;
	if(winScrollTop > MainElementsScroll){
		MainElements.css("transform","skew(0deg,0deg) translateY(-50%)")
		MainElements.css("opacity","1")
	}
})
})


$(document).ready(function(){
	var news = $(".sales-dot");
	news.each(function(){
		$(this).on("click",function(){
			news.removeClass('black2')
			$(this).addClass('black2')
		})
	})
})



$(document).ready(function(){
	let NavELements = $("#nav-search-elements")
	$(".nav-element-search").on("click",function(){
		$('body').css("overflow-y","hidden")
		NavELements.css("visibility","visible")
		NavELements.css("top","0")
		NavELements.css("opacity","1")
	$("#nav-cross").on("click",function(){
		$('body').css("overflow-y","scroll")
		NavELements.css("visibility","hidden")
		NavELements.css("opacity","0")
		NavELements.css("top","50px")
	})
	})
})




$(document).ready(function(){
	let NavLanguage = $("#nav-language");
	$(".nav-lang").on("click",function(){
		NavLanguage.toggle(100);
		console.log('s')
	})
})






