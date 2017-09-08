/**
 * @author Varun Kumar <varunon9@gmail.com>
 */

/**
 * Execute this script from terminal. After 5 seconds, message will start getting typed and sent.
 * You can see message being typed and sent on terminal. To send it to your friend on whatsapp web, just 
 * click on inputDiv (div for typing message on whatsapp web).
 */

import java.util.*;

public class WhatsappAutoMessenger {

	public static void main(String args[]) {

        // define your messages here
		String wishes[] = {
		    "Happy bday", 
		    "happy again!!",
		    "Happy bday last time :p"
		}; 

		MouseKeyboardControl mouseKeyboardControl = new MouseKeyboardControl();
		Timer timer = new Timer();

        final int length = wishes.length;

		timer.scheduleAtFixedRate(new TimerTask() {
			int index = 0;
			public void run() {

				String wish = wishes[index++];

				// type ecah character of wish message
				for (int i = 0; i < wish.length(); i++) {
					mouseKeyboardControl.typeCharacter(wish.charAt(i));
				}

				// simulate enter key to send message
				mouseKeyboardControl.typeCharacter('\n');

				// we want to restart if all wishes have been sent
				if (index == length) {
					index = 0;
				}
			}
		}, 5000, 5000); // 5000ms delay and 5000ms repeat period
	}
}