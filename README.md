# React-Photo-Gallery

<p align="center">
<img src="src/giphy-react-photo-gallery.gif">
<p>

### See it live

https://react-photo-gallery-dylanattal.surge.sh/

### Summary

This was my first project using React Router. This was also my first time making a Single Page Application. Making this photo gallery as an SPA worked well with React Router because I just changed the view on the page by rendering different components based on the URL path. This preserves the user's expectations of what changing pages should look like without having to actually load different pages.

I'm proud of adding breadcrumb navigation to the app. I was able to create these `Link`s dynamically by accessing the params that were passed through Router. Also, I added an `if` statement to the `PhotoList` and `PhotoDetails` components to display a 404 page if a user inputs a path into the URL that my app does not support.

I was given a JSON object to complete this project with. It had a few pictures of pandas and miniature sculptures in it. After getting React Router to work, I decided to make my own JSON object with original data. I made this project right after Thanksgiving... so my mind was on food. I decided to make a photo gallery full of classic American holiday dishes!

### Project Goals

- [x] Create an app where users can select categories to display lists of pictures, then can select a picture from that list
- [x] Use React Router to make a Single Page Application

### Technologies Used

HTML, CSS, Javascript, React, React Router
