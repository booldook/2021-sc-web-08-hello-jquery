// show(속도(ms, 'slow', 'fast'), 애니메이션이 완료된 후 할 기능)

// display
$('.bt-show').click(function() {
	$('.hero').stop().show(2000, function () {
		alert('나타났어요~')
	})
})

$('.bt-hide').on('click', function() {
	$('.hero').stop().hide('slow')
})

$('.bt-toggle').on('click', function() {
	$('.hero').stop().toggle('fast')
})

// fade
$('.bt-fade-in').click(function() {
	$('.hero').fadeIn('slow', function(){
		alert('서서히 나타났어요~')
	})
})

$('.bt-fade-out').on('click', function() {
	$('.hero').fadeOut()
})

$('.bt-fade-toggle').on('click', function() {
	$('.hero').fadeToggle()
})

// slide
$('.bt-slide-down').click(function() {
	$('.hero').slideDown()
})

$('.bt-slide-up').on('click', function() {
	$('.hero').slideUp()
})

$('.bt-slide-toggle').on('click', function() {
	$('.hero').slideToggle()
})

// $('대상').stop().animate({애니메이션}, 속도, 타입, 콜백)
// 속도: Number 	- ms
// 타입: String 	- 'swing', 'linear'
// 콜백: Function - 애니메이션이 끝난 후 작동할 동작
/*
backgroundPositionX
backgroundPositionY
borderWidth
borderBottomWidth
borderLeftWidth
borderRightWidth
borderTopWidth
borderSpacing
margin
marginBottom
marginLeft
marginRight
marginTop
opacity
outlineWidth
padding
paddingBottom
paddingLeft
paddingRight
paddingTop
height
width
maxHeight
maxWidth
minHeight
minWidth
fontSize
bottom
left
right
top
letterSpacing
wordSpacing
lineHeight
textIndent
*/
$('.bt-animate').on('click', function() {
	$('.hero').stop().animate({'margin-left':'860px','margin-top':0}, 1000, function() { 
		$(this).animate({'margin-left':'860px','margin-top':'200px'}, 500, function() {
			$(this).animate({'margin-left':0,'margin-top':'200px'}, 1000, function() {
				$(this).animate({'margin-left':0,'margin-top':0}, 500, function() {
					alert('Animation 종료')
				})
			})
		})
	})
})