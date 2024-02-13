//your JS code here. If required.
function convertToUppercase(){
	//extract the value by id
	let input = document.getElementById('fname');
	// get the value to write in the input 
	     let value = input.value;
	  //convert it into uppercase
	    value = value.toUppercase();
	//update the value in the input feild
	input.value = value;
}
// add eventlisteners to the input field to trigger the conversion when it loses focus
 document.getElementById('fname').addEventListeners('blur',convertToUppercase);