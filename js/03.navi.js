/******************** 글로벌 설정 *********************/
$('.sub-wrapper').slideUp(0)

/******************** 사용자 함수 *********************/


/******************** 이벤트 등록 *********************/
$('.navi-wrapper').on('mouseenter', onNaviEnter)
$('.navi-wrapper').on('mouseleave', onNaviLeave)

/******************** 이벤트 콜백 *********************/
function onNaviEnter() {
	$(this).find('.sub-wrapper').stop().slideDown(500)
}

function onNaviLeave() {
	$(this).find('.sub-wrapper').stop().slideUp(500)
}
