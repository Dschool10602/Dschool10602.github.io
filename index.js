$('#movie').$e('click',function(e){
	$('#youtube').style.display = 'initial'
})

var close = function(e){
	$('#youtube').style.display = 'none'
	var yt = $('#youtube').cloneNode(true)
	$('#youtube').remove()
	$('#title').apnd(yt)
	$('#close').$e('click',close)
}

$('#close').$e('click',close)