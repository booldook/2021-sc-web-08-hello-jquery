/*************** 글로벌 설정 *****************/
var idx											// 현재 보이는 슬라이드의 index
var slideLen								// 전체 슬라이드의 갯수
var slideLastIdx						// 마지막 슬라이드의 index
var aniSpeed								// fade animation 속도(ms)
var intervalGap							// 자동전환 interval 속도(ms)
var interval								// 자동전환 setInterval을 담는 변수
var $slideStage							// $('.slide-stage')
var $slideWrap							// $('.slide-stage .slide-wrap')
var $slide									// $('.slide-stage .slide')
var $pagerWrap							// $('.slide-stage .pager-wrap')
var $pager									// $('.slide-stage .pager')
init()

/*************** 사용자 함수 *****************/
function init() {
	idx = 0
	aniSpeed = 500
	intervalGap = 3000
	$slideStage = $('.slide-stage.stage01')
	$slideWrap = $slideStage.find('.slide-wrap')
	$pagerWrap = $slideStage.find('.pager-wrap')
	
	$slideStage.find('.slide').eq(0).clone().appendTo($slideWrap)
	$slide = $slideStage.find('.slide')
	slideLen = $slide.length
	slideLastIdx = slideLen - 1
	$slideWrap.css('width', slideLen * 100 + '%')
	$slide.css('width', 100/slideLen + '%')

	var html = '<i class="pager fa fa-circle"></i>'
	for(var i=0; i<slideLastIdx; i++) $pagerWrap.append(html)
	$pager = $pagerWrap.find('.pager')
	$pager.click(onPagerClick)
	$pager.eq(idx).addClass('active')

	interval = setInterval(onNextClick, intervalGap)
}

function ani() {
	$pager.removeClass('active')
	$pager.eq(idx).addClass('active')
	$slideWrap.stop().animate({'left': -idx * 100 + '%'}, aniSpeed)
}


/*************** 이벤트 등록 *****************/
$slideStage.find('.bt-prev').click(onPrevClick)
$slideStage.find('.bt-next').click(onNextClick)
// $slideStage.mouseover(onStageOver).mouseleave(onStageLeave)
$slideStage.hover(onStageOver, onStageLeave)


/*************** 이벤트 콜백 *****************/
function onPagerClick() {
	idx = $(this).index()
	ani()
}

function onPrevClick() {
	if(idx === 0) {
		$slideWrap.css('left', -(slideLastIdx * 100) + '%')
		idx = slideLastIdx - 1
	}
	else idx--
	ani()
}

function onNextClick() {
	if(idx === slideLastIdx) {
		$slideWrap.css('left', 0)
		idx = 1
	}
	else idx++
	ani()
}

function onStageOver() {
	clearInterval(interval)
}

function onStageLeave() {
	interval = setInterval(onNextClick, intervalGap)
}
