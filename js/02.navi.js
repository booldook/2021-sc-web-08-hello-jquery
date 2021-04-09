/******************** 글로벌 설정 *********************/
$('.sub-wrap').slideUp(0)


/******************** 사용자 함수 *********************/


/******************** 이벤트 등록 *********************/
// $('.hover-navi').mouseover(onNaviHover)
$('.hover-navi').on('mouseover', onNaviHover)
$('.hover-navi').on('mouseleave', onNaviLeave)


/******************** 이벤트 콜백 *********************/
function onNaviLeave() {

}

function onNaviHover() {

}