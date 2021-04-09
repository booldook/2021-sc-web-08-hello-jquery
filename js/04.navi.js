/******************** 글로벌 설정 *********************/
$('.sub-wrapper').slideUp(0)

/******************** 사용자 함수 *********************/


/******************** 이벤트 등록 *********************/
// $('.header-wrapper').on('mouseenter', onHeaderEnter)
$('.navi-wrapper').on('mouseenter', onNaviEnter)
$('.header-wrapper').on('mouseleave', onHeaderLeave)

/******************** 이벤트 콜백 *********************/
/* function onHeaderEnter() {
	$(this).find('.sub-wrapper').stop().slideDown(500)
} */

function onNaviEnter() {
	$(this).next().stop().slideDown(500)
}

function onHeaderLeave() {
	$(this).find('.sub-wrapper').stop().slideUp(500)
}