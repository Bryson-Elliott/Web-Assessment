console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert ('It was a success!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('img').addEventListener('mouseover', () => {
	alert ('You look awesome today!')

})
//I'm not sure here, I will move on and try to come back
