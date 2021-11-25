# Frontend Mentor Solution Compilation
I wanted to get more practice without having to come up with UI designs from scratch each time, so I started doing [Frontend Mentor](https://www.frontendmentor.io/) challenges. After getting a handful of challenges sorted out, I wanted to compile these solutions in one place, and that's how this project came to be.


![Frontend Mentor Solution Compilation Preview](https://github.com/msunji/fe-mentor-compilation/blob/main/client/public/fe-mentor-compilation-thumb.png "Frontend Mentor Solution Compilation Preview")


## Tech Stack
### React and styled-components
This project is bootstrapped with CRA and styled with styled-components.

### Axios
I used [Axios](https://axios-http.com/) to make requests to the route I set up with Express.

### Airtable API
I had kept track of all the solutions I'd finished on Airtable, so I decided to use Airtable as a database to fetch data from. Luckily, Airtable offers an official JavaScript library called [airtable.js](https://github.com/airtable/airtable.js/) that's pretty straightforward to work with.

### Node.js and Express
Airtable provides you with an API key that has access to all your bases and records. So it probably isn't the best idea to have your API keys exposed on your frontend. To solve this issue, I setup a Node.js + Express backend that makes a GET request to the Airtable API (instead of doing this in the frontend).




