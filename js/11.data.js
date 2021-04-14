/*************** 글로벌 설정 *****************/
var prds									// 상품리스트(배열)
var $listWrap							// $('.list-wrap')
var $list									// $('.list-wrap > .list')
init()

/*************** 사용자 함수 *****************/
function init() {
	prds = [
		{ id: 1, src: '../img/p1.jpg', title: '맛있는 체리', desc: '체리체리' },
		{ id: 2, src: '../img/p2.jpg', title: '맛있는 빵', desc: '빵빵빵' },
		{ id: 3, src: '../img/p3.jpg', title: '맛있는 크림', desc: '크림크림' },
		{ id: 4, src: '../img/p4.jpg', title: '맛있는 연어', desc: '연어연어' },
		{ id: 5, src: '../img/p5.jpg', title: '맛있는 샌드위치', desc: '샌드위치' },
		{ id: 6, src: '../img/p6.jpg', title: '맛있는 스테이크', desc: '스테이크' },
		{ id: 7, src: '../img/p7.jpg', title: '맛있는 와인', desc: '와인와인' },
		{ id: 8, src: '../img/p8.jpg', title: '맛있는 크림', desc: '크림크림' },
	]
	$listWrap = $('.list-wrap')
}

/*************** 이벤트 등록 *****************/
$('.bt-create').click(onCreate)
$('.bt-remove').click(onRemove)

/*************** 이벤트 콜백 *****************/
function onCreate() {
	var html
	$listWrap.empty()
	for(var i=0; i<prds.length; i++) {
		html  = '<li class="list card">'
		html += '	<img class="card-img-top" src="'+prds[i].src+'" class="w-100">'
		html += '	<div class="card-body">'
		html += '		<h4 class="card-title">'+prds[i].title+'</h4>'
		html += '		<p class="card-text">'+prds[i].desc+'</p>'
		html += '	</div>'
		html += '</li>'
		$listWrap.append(html)
	}
}

function onRemove() {
	$listWrap.empty()
}
