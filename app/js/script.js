
let shareOpen = false;

document.getElementById('toggle-overlay').addEventListener('click',function(){
	shareOpen = shareOpen ? false : true;
	document.getElementById('overlay').style.display = shareOpen ? 'none' : 'flex';
});


console.log('HELLO');

const test = () => {
	console.log('this is a test');
};
