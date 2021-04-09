// display
$('.bt-show').click(function() {
	$('.hero').show()
})

$('.bt-hide').on('click', function() {
	$('.hero').hide()
})

$('.bt-toggle').on('click', function() {
	$('.hero').toggle()
})

// fade
$('.bt-fade-in').click(function() {
	$('.hero').fadeIn()
})

$('.bt-fade-out').on('click', function() {
	$('.hero').fadeOut()
})

$('.bt-fade-toggle').on('click', function() {
	$('.hero').fadeToggle()
})