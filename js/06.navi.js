/******************** 글로벌 설정 *********************/
$('.sub-wrap').slideUp(0)


/******************** 사용자 함수 *********************/



/******************** 이벤트 등록 *********************/
// $('.navi > span').on('click', onNaviClick)
$('.navi').on('mouseenter', onNaviEnter)
$('.navi').on('mouseleave', onNaviLeave)


/******************** 이벤트 콜백 *********************/
/* function onNaviClick() {
	$('.sub-wrap').stop().slideUp(10)
	$(this).next().stop().slideToggle(500)
} */
function onNaviEnter() {
	$('.sub-wrap').stop().slideUp(0)
	$(this).find('.sub-wrap').stop().slideDown(300)
}
function onNaviLeave() {
	$('.sub-wrap').stop().slideUp(300)
}
