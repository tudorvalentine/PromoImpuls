$(document).ready( ()=>{
	$('.main__slider').slick({
		arrow:true,
		appendArrows:$('.arrow'),
		prevArrow:'<button class="about__prev about__btn-bg arrow__news_size arrow__prev_pos"></button>',
		nextArrow:'<button class="about__next about__btn-bg arrow__news_size arrow__next_pos"></button>'
	});
})