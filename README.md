Photo Carousel Service
Displays Photos for listings

Description: 

Related Projects
https://github.com/hackshack1/Carousel
https://github.com/hackshack1/Recommendations
https://github.com/hackshack1/Recommendations
https://github.com/hackshack1/Reviews
Table of Contents
Usage
Requirements
Development

Usage
    Setup config.js in ./database/

Requirements
    Node 10.16

Development
    npm run seed-database
    npm run react-dev
    npm run start

Installing Dependencies
    From within the root directory:
        npm install
CRUD API
POST /:id/image post a new image to the listing with an id of :id

GET /:id/image gets all photos for listingId

PUT /:id/image  Update photo with imageId of listingId

DELETE /:id/image Delete photo with imageId of listingId of :recid# Gallery
