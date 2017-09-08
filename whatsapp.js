/**
 * @author Varun Kumar <varunon9@gmail.com>
 */

/**
 * Paste this script into console window of browser and hit enter
 */ 

// This div is input field where user types message. I found it using inspect elements (Ctrl + Shift + I)
var inputDiv = document.getElementsByClassName('input')[0];

// Array which holds all the messages which we are going to send
var wishes = [
    "happy bday",
    "happy again!!"
];

var index = 0;
var length = wishes.length;

/**
 * My first Approach: -
 * Change the content of inputDiv using javascript, i.e. type message into inputDiv like real user
 * Simulate click on send Button.
 * But problem is 'send button' gets hidden on each send and it is not visible/enabled when script types some
 * message into inputDiv. It is enabled only on real typing by actual user. 
 */

/**
 * This method throw Uncaught TypeError: Cannot read property 'click' of undefined
 * because 'compose-btn-send' is hidden.
 * Whenever user types some message into input Div (real user), this button is enabled (replacing microphone symbol).
 * As soon as message is sent, this button gets disabled again. 
 * 
 * Try typing some message by yourself into inputDiv and then running this script. It'll work 1st time.
 */
var firstMethod = setInterval(function() {
    var wish = wishes[index++];
    inputDiv.innerText = wish;
    document.getElementsByClassName('compose-btn-send')[0].click();
    if (index == length) {
    	index = 0;
    }
}, 5000); // 5000 ms

/**
 * My second approach-
 * Basically we have to simulate two events-
 *     1. Typing some message into inputDiv
 *     2. Hitting enter key to send it (Not working)
 */

/**
 * This method type message into inputDiv but unable to send it, i.e. unable to simulate enter key press on inputDiv
 */
var secondMethod = setInterval(function() {
    var wish = wishes[index++];
    inputDiv.innerText = wish;
    var event = document.createEvent("KeyboardEvent");
    event.initKeyboardEvent("keydown", true, true, null, false, false, false, false, 13, 0); // 13 is Enter Key
    inputDiv.dispatchEvent(event);
    if (index == length) {
        index = 0;
    }
}, 5000); // 5000 ms

//clearInterval(firstMethod);
//clearInterval(secondMethod);