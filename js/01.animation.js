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