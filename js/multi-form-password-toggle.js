

/* -- This is a polyfill that  pushes support for matches() to IE9 --  */
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
/* End Polyfill*/

//changes password input fields on page with type = "password" from a node list to an array
var passwords = Array.prototype.slice.call(document.querySelectorAll('[type = "password"]'));
var toggleCheckbox = document.querySelector('#show-password');
//Listens for clicks on whole window
window.addEventListener('click', function ( event ) {

    //if clicked element has the id show-passwords, it's a match!
    if (event.target.matches('#show-passwords')) {
        // if (toggleCheckbox.checked) {
        //     passwords.forEach(function (password, index) {
        //         password.type = 'text';
        //     });
        // } else {
        //     passwords.forEach(function (password, index) {
        //         password.type = 'password';
        //     });  
        this.console.log(passwords);
    }
}, false);

