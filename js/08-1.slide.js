/*************** 글로벌 설정 *****************/
var idx											// 현재 보이는 슬라이드의 index
var zIdx										// z-index의 증가값을 저장할 변수
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
	// 전역변수 초기화
	idx = 0
	zIdx = 2
	slideLen = $('.slide-stage .slide').length
	slideLastIdx = slideLen - 1
	aniSpeed = 500
	intervalGap = 3000
	$slideStage = $('.slide-stage.stage1')
	$slideWrap = $slideStage.find('.slide-wrap')
	$slide = $slideStage.find('.slide')
	$pagerWrap = $slideStage.find('.pager-wrap')

	// 한번만 실행될 동작
	var html = '<i class="pager fa fa-circle"></i>'
	for(var i=0; i<slideLen; i++) {
		$(html).appendTo($pagerWrap).on('click', onPagerClick)
	}
	$pager = $pagerWrap.find('.pager')

	$slide.eq(idx).css('z-index', zIdx++)
	$pager.eq(idx).addClass('active')
	interval = setInterval(onNextClick, intervalGap)
}

function ani() {
	/**
	 *? 1.pager active 변화
	 *? 2.fade animation 진행
	*/
	$pager.removeClass('active')
	$pager.eq(idx).addClass('active')

	$slide.eq(idx).css({'opacity': 0, 'z-index': zIdx++})
	$slide.eq(idx).stop().animate({'opacity': 1}, aniSpeed)
}


/*************** 이벤트 등록 *****************/
$slideStage.find('.bt-prev').on('click', onPrevClick)
$slideStage.find('.bt-next').on('click', onNextClick)
$slideStage.on('mouseover', onStageOver)
$slideStage.on('mouseleave', onStageLeave)


/*************** 이벤트 콜백 *****************/
function onPagerClick() {
	idx = $(this).index()
	ani()
}

function onPrevClick() {
	idx = (idx === 0) ? slideLastIdx : idx - 1
	ani()
}

function onNextClick() {
	idx = (idx === slideLastIdx) ? 0 : idx + 1
	ani()
}

function onStageOver() {
	clearInterval(interval)
}

function onStageLeave() {
	interval = setInterval(onNextClick, intervalGap)
}
