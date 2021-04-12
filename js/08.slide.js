/*************** 사전 지식 *****************/
/*
i++(후위연산자)	// i = i + 1
++i(전위연산자)	// i = i + 1
i += 1						// i = i + 1
i += 5						// i = i + 5

var i=0
console.log(i++)	// 0
console.log(i++)	// 1
console.log(i++)	// 2

var i=0
console.log(++i)	// 1
console.log(++i)	// 2
console.log(++i)	// 3
*/

/*
삼항연산자
a = (조건) ? 값1 : 값2
조건(참): a = 값1, 조건(거짓): a = 값2

var idx = 3
var lastIdx = $('.slide-wrap .slide').length - 1
idx = (idx === 0) ? lastIdx : idx - 1
console.log(idx)
*/

/*************** 글로벌 설정 *****************/
var idx = 0		// 현재 맨 위에 나타나는 .slide의 index
var zIdx = 2	// 맨 위에 나타날 .slide의 z-index
var lastIdx = $('.slide-wrap .slide').length - 1
$('.slide-wrap .slide').eq(idx).css('z-index', zIdx++)


/*************** 사용자 함수 *****************/


/*************** 이벤트 등록 *****************/
$('.slide-stage .bt-prev').on('click', onPrevClick)
$('.slide-stage .bt-next').on('click', onNextClick)


/*************** 이벤트 콜백 *****************/
function onPrevClick() {
	idx = (idx === 0) ? lastIdx : idx - 1
	$('.slide-wrap .slide').eq(idx).css('z-index', zIdx++)
	.stop().fadeOut(0).fadeIn(500)
}

function onNextClick() {
	idx = (idx === lastIdx) ? 0 : idx + 1
	$('.slide-wrap .slide').eq(idx).css('z-index', zIdx++)
	.stop().fadeOut(0).fadeIn(500)
}
