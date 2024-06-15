var box  = document.getElementById('box');
var down = false;


function toggleNotifi(){
	if (down) {
		box.style.height  = '0px';
		box.style.opacity = 0;
		box.style.overflow = scroll;
		down = false;
	}else {
		box.style.height  = '327px';
		box.style.opacity = 1;
		down = true;
	}
}