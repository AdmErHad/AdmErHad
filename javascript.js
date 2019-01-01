$(document).ready(function(){
	$("#hamburger").click(function(){
		$("#header-nav").toggleClass('active')
		$("nav ul:nth-child(2)").toggleClass('active')
	})
})
$(document).ready(function(){
	const headerText = $('#header-text');
	headerText.css('opacity','1')
	headerText.css('top','56%')
})

$(document).ready(function(){
$(window).on("scroll",function(){
		const winScrollTop = $(window).scrollTop();
	const salesElement = $("#sales-element1");
	const salesElement2 = $("#sales-element2");
	const salesElement3 = $("#sales-element3");
	const salesElementOffsetTop = salesElement.offset().top;
	const height = $('header').height();
	const salesElementScroll = salesElementOffsetTop - height;
	if(winScrollTop > salesElementScroll){
		salesElement.css("opacity","1")
		salesElement2.css("opacity","1")
		salesElement3.css("opacity","1")
	}
})
})

$(document).ready(function(){
$(window).on("scroll",function(){
		const winScrollTop = $(window).scrollTop();
	const MainInfoElements = $("#main-info-info ul li");
	const MainInfoElementsOffsetTop = MainInfoElements.offset().top;
	const heightWin = $('header').height();
	const MainInfoElementsScroll = MainInfoElementsOffsetTop - heightWin;
	if(winScrollTop > MainInfoElementsScroll){
		MainInfoElements.css("transform","scale(1)")
		MainInfoElements.css("opacity","1")

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

