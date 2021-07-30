
# HW_3

GitHub Repository Link: https://github.com/aungy5/HW_3

Deployed Application Link: https://aungy5.github.io/HW_3/

Summary:
HTML and Javascript work together to create a random password based on user inputs. 

After clicking the “generate” button, the user is prompted to select criteria (character length, uppercase, lowercase, special characters) for their password. 

After entering their desired criteria, the user will be given a secure password in the text box on the center of the page. 

The user can then copy the password to their clipboard using the “Copy Password” button.

Acceptance Criteria:

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

Features:

Generate Button:
When clicked this will run almost all of the javascript we have written, prompting the user for their input regarding the specifications of the password (length, uppercase, lowercase, special characters)

Text Area:
This is where the password will be generated. The random combination of numbers, letters, and special characters (based on the user’s selection) will be shown in this text box. 

Copy Button:
This enables the user to copy the password to their clipboard. 

Screenshots:

<img width="1437" alt="Screen Shot 2021-07-29 at 10 52 59 PM" src="https://user-images.githubusercontent.com/81643749/127592799-42398d16-d3cb-4979-901a-6360e288aef2.png">
<img width="1422" alt="Screen Shot 2021-07-29 at 10 53 30 PM" src="https://user-images.githubusercontent.com/81643749/127592808-ae6f1029-5a56-4877-8634-426eea7e46a5.png">
