

/* -- This is a polyfill that  pushes support for matches() to IE9 --  */
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
/* End Polyfill*/

//listens for all click events in browser
document.addEventListener('click', function(event) {

    //check to see if clicked item was a pw-toggle
    //stop callback function if it is not
    if(!event.target.matches('[data-pw-toggle]')) return; 
        //check target pw fields
        var passwords = Array.prototype.slice.call(document.querySelectorAll(event.target.getAttribute('data-pw-toggle')));

        //Loop thru each pw field
        passwords.forEach(function (password) {
            //if toogle is checked, change type to 'text'
            //otherwise, change it to 'password'
            if(event.target.checked) {
                password.type = 'text';
            } else {
                password.type = 'password';
            }
        });
},false);



