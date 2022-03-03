# Frontend Mentor Solution Compilation

<p align="center">
<img src="https://res.cloudinary.com/dxzcdb0pm/image/upload/v1646291446/portfolio/fem-screens/fem-compilation-thumbnail_yr7bqt.png" alt="Profile Card Component Preview" />
</p>

<br />

---

## Overview

This is a compilation of Frontend Mentor challenges that I've completed. I've used Airtable as a database to keep track of completed solutions, but you can check the list below as well, to get an idea of where I'm at so far with these challenges. You can view the compilation [here](https://fe-mentor-compilation.herokuapp.com/). 

The front end part of this site is built with React (bootstrapped with CRA), while the backend consists of an Express server to pull data from the Airtable API.

I'm currently trying to improve performance metrics for this project, so I've since made a few changes, namely:
- Switching from styled-components to SCSS
- Switching from axios to the Fetch API
- Adjusting keyframe animation rules, and moving thumbnails to Cloudinary

## Tech Stack
### React and SCSS
This project is bootstrapped with CRA and styled with SCSS. 

### Airtable API and Fetch API
I had kept track of all the solutions I'd finished on Airtable, so I decided to use Airtable as a database to fetch data from (using the Fetch API). Luckily, Airtable offers an official JavaScript library called [airtable.js](https://github.com/airtable/airtable.js/) that's pretty straightforward to work with.

### Node.js and Express
Airtable provides you with an API key that has access to all your bases and records. So it probably isn't the best idea to have your API keys exposed on your frontend. To solve this issue, I setup a Node.js + Express backend that makes a GET request to the Airtable API (instead of doing this in the frontend).

### Heroku
The first iteration of this site used Netlify serverless functions, but I wanted to learn a bit more about Node.js and Express, so after getting the project all sorted out, I opted to deploy it to Heroku instead.

## Moving Forward

As the number of completed challenges grows, I think it would be best to start paginating API GET requests. It could be good as well to add a caching layer to the Express server to improve performance and work as a fallback so I'm not constricted by rate limits (though I don't really think that'd be too much of an issue, if I'm being honest).

---

## Solutions
If it's been ticked off, it's been completed and you should be able to find it on the [compilation site](https://fe-mentor-compilation.herokuapp.com/). Otherwise, it's a solution that's in the works and you can come back later to check it out ✌🏻

- [x] Stats Preview Card Component
- [x] Single Price Grid Component
- [x] Social Proof Section
- [x] Sunnyside Agency Landing Page
- [x] Social Media Dashboard
- [x] Room Homepage
- [x] Profile Card Component
- [x] Time Tracking Dashboard
- [ ] Galleria Slideshow Site
- [ ] Job Listings with Filtering
- [ ] E-Commerce Product Page
- [ ] Todo App
- [ ] Intro Component with Sign-up Form








