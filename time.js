/* current time */
function addZ(n){
	return n<10? '0'+n:''+n
}
function addSp(n){
	return n<10? ' '+n:''+n
}
function presenttime(){
	var curtime = new Date()
	var targettime = new Date(2018,6,2,10,0,0)
	var time = new Date(targettime.valueOf() - curtime.valueOf())
	var passed = (time<=0)
	w = addZ(time.getUTCDate())
	h = addZ(time.getUTCHours())
	m = addZ(time.getUTCMinutes())
	s = addZ(time.getUTCSeconds())
	$('#date>.number').innerHTML = w
	$('#hour>.number').innerHTML = h
	$('#min>.number').innerHTML = m
	$('#sec>.number').innerHTML = s
	setTimeout(presenttime,1000)
}

presenttime()