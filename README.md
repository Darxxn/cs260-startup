#  Voter

## Description deliverable

### Elevator pitch

Imagine a game where your choices lead to actual consequences. Those choices would be reflected as you progressed in the world, allowing you to progess towards victory, or death. The purpose of the game would be for players to join together to save the world that is in peril. To save your progress, you would be able to log in and be able to see highscores of all the players in the world!

### Design

<img width="853" alt="Login_page" src="https://github.com/Darxxn/cs260-startup/assets/124082321/59376aee-9c99-4c64-9b7a-dc8424f89cc8">

Here's the page that shows up when someone first sees the website

<img width="853" alt="Startup_design" src="https://github.com/Darxxn/cs260-startup/assets/124082321/a09509fb-f645-4ab5-bbca-61f74b7fea7a">

Here is the design of the first page after someone logs in

### Key features

- User secure login over HTTPS
- Highscore Leaderboard
- Live team/world chat
- Display of choices, ability to make choices
- Images/descriptions of each choice

### Technologies

I will be using the required technology in the following ways.

- **HTML** - Use correct HTML structure for the application. Three HTML pages will be used, one for login, one for the game with choices, finally, one for the leaderboards.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice, contrast, and within the chat box.
- **JavaScript** - Provides login and player name, choice display, chat messages, and leaderboards.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving choices
  - leaderboards
  - live chat messages
- **DB** - Store users, choices, messages, and points in database.
- **Login** - Register and login users. Credentials securely stored in database. Points and choices will be attached to the user.
- **WebSocket** - chat messages will be broadcasted to all players online, leadership points will be updated as the game goes on.
- **React** - Application ported to use the React web framework.

## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - Three HTML pages that represent welcome screen, login, and leaderboards.
- **Links** - The points are link to the user, chat messages are also linked to the user, and choices are linked to the user.
- **Text** - Every choice will have a description under. Chat messages, leaderboards.
- **Images** - Above every choice will be a picture relating to their choice. Welcome screen background.
- **Login** - Input box and submit button for login.
- **Database** - Leaderboard points, chat messages, user's name represent data pulled from the database.
- **WebSocket** - The leaderboard points, chat messages represent realtime interaction with game.

## CSS deliverable

For this deliverable I properly styled the application into its final appearance.

- **Header, footer, and main content body**
- **Navigation elements** - Used on images
- **Responsive to window resizing** - My game will look great on all window sizes and devices
- **Application elements** - Used good contrast and whitespace
- **Application text content** - Consistent fonts
- **Application images** - Will work on specific images for each choice

## JavaScript deliverable

For this deliverable I implemented by JavaScript so that the application works for a single user, along with realtime chat display between players.

- **Login** - When you press enter or the login button it takes you to the choice page.
- **Database** - Display the chat messages and choices.
- **Application logic** - The highlight and ranking number change based up the user's choices/points.

## Service deliverable

For this deliverable I added backend endpoints that receives choices and returns the choice points.

- **Backend service endpoints** - Placeholders for login that stores the current user on the server. Endpoints for choices/points, messages.

## DB deliverable

Used to store scores (with corresponding usernames), and user login/password information

## Login deliverable

For this deliverable I associate the choices, points, and messages with the logged in user.

- **User registration** - Creates a new account in the database.
- **Existing user** - Stores the choices/points, messages under the same user if the user already exists.
- **Restricts functionality** - You cannot play, chat, or see the highscore until you have logged in.

## WebSocket deliverable

For this deliverable I used webSocket to update the choices, points, and messages on the frontend in realtime.

## React deliverable

Not quite sure what this is yet.





**HTML Startup Assignment:**

Home HTML
I changed the head icon to Pixel Castle.png
Title to BlendrBox
Changed the Score html to "LeaderBoards."
Header on the page to BlendrBox
Changed to "Welcome to BlendrBox"
Added "Password" and a fill in box, moved the Login button down
Added my GitHub Repo to the link

About HTML
Changed the picture to a picture of a pixel dragon
Changed the text in the textbox

Scores HTML
Made changes to the score table

Play HTML
Made changes to main, "- started a new game/scored 337 points."
Changed "Start Journey"
Added styling to the pictures and the text under
Made a table with the different buttons to choose later
