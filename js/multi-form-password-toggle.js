

/* -- This is a polyfill that  pushes support for matches() to IE9 --  */
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
/* End Polyfill*/

//assigns password field to a variable
var password = document.querySelector('#password');
//assigns first checkbox to a variable
var toggle = document.querySelector('#show-password');

//assigns new and current password fields to variable
var newPassword = document.querySelector('#new-password');
var currentPassword = document.querySelector('#current-password');
//assigns second checkbox to a variable
var toggleMulti = document.querySelector('#show-passwords');



window.addEventListener('click', function(event) {
    //if click matches first toggle checkbox
    if(event.target.matches('#show-password')) {
        //check to see if toggle is checked.
        //if it is, set the type attribute of password to text
        //otherwise
        //set the type attribute of password to password
        if (toggle.checked) {
            password.setAttribute('type', 'text');
        } else {
            password.setAttribute('type', 'password')
        }
    } 

    if(event.target.matches('#show-passwords')) {
        if (toggleMulti.checked) {
            newPassword.setAttribute('type', 'text');
            currentPassword.setAttribute('type', 'text');
        } else {
            newPassword.setAttribute('type', 'password');
            currentPassword.setAttribute('type', 'password');
        }
    }
    
}, false);



