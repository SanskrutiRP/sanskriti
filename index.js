/*setTimeout(()=>{
	document.getElementById('staytime').style.display = 'flex'
}, 5000)																						*/

setTimeout(()=>{
	document.getElementById('modal').classList.add("active");
	document.getElementById('container').classList.add('cover');
	document.getElementById('menu').classList.add('cover');
}, 5000);

document.getElementById('close').addEventListener('click', ()=>{
	document.getElementById('modal').classList.remove("active");
	document.getElementById('container').classList.remove('cover');
	document.getElementById('menu').classList.remove('cover');
});