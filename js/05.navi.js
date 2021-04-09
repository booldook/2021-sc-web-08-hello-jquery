/******************** 글로벌 설정 *********************/
$('.sub-wrap').slideUp(0)

/******************** 사용자 함수 *********************/


/******************** 이벤트 등록 *********************/
// $('.navi').on('mouseenter', onNaviEnter)
// $('.navi').on('mouseleave', onNaviLeave)
$('.navi > span').on('click', onNaviClick)

/******************** 이벤트 콜백 *********************/
/* function onNaviEnter() {
	$(this).find('.sub-wrap').stop().slideDown(500)
} 
function onNaviLeave() {
	$(this).find('.sub-wrap').stop().slideUp(500)
} */
function onNaviClick() {
	$(this).next().stop().slideToggle(500)
}