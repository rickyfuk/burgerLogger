# Project Name

Homework 13 - Bugger Logger

# Table of contents

- [Project Name](#project-name)
- [Table of contents](#table-of-contents)
- [General info](#general-info)
- [Video Demo](#video-demo)
- [Features](#features)
- [User Guide](#user-guide)
- [Code Style](#code-style)
- [Technology](#technology)
- [Local File Description](#local-file-description)
- [Status](#status)
- [Create By](#create-by)

# General info

This application is serving as a process monitor of a burger from order to served to customer. Both the manager and customer could look check their burger order status from this application in order to reduce the staff workload.

For the feature of the site, please visit the [Features](#features) section for more details.

# Video Demo

![burger logger demo](./public/assets/img/BurgerLogger.gif)

You might also visit the following youtube link for the demo:
[burger logger demo](https://youtu.be/dB7DVuc1y7o)

# Features

In this application, the following features have been applied:

1. All the data is read from or written from the burger logger database
2. The user can perform the following function from this application:
   1. Add a new burger - a new burger will be added to under "Making Burger" list
   2. Complete the making process - the burger will move to "Served Burger" list after the "Complete" button is clicked
   3. Delete the burger - the burger can be deleted after moved to the "Served Burger" list
3. All the data from the database will be loaded to the main page while the page is loaded
4. Every Burger will come with an ID for easier reference when same burger name appears.

# User Guide

1. The user can add a burger order on the text box under the "Serve a Burger" logo
2. The user can review the list of the burger in progress from "Making Burger" list
3. The user can check if the burger is ready to serve or not from the "Served Burger" list
4. The user can change the burger from the "Making Burger" to "Served Burger" list by clicking the "Complete" button
5. The user can remove the burger from the list by clicking "Delete" button under the "Serve Burger" list
6. The user can only remove the burger from the "Served Burger" list

# Code Style

Standard

# Technology

The following technology have been used for this project:

1. [JavaScript](https://www.javascript.com/)
2. [NodeJS](https://nodejs.org/en/)
3. [NPM](https://www.npmjs.com/)
   - The following application from NPM have been used:
   1. [mysql](https://github.com/mysqljs/mysql#readme)
   2. [Express](https://expressjs.com/)
   3. [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
4. [MySQL](https://www.mysql.com/)
5. [CSS](https://www.w3.org/Style/CSS/)
6. [Bootstrap](https://getbootstrap.com/)
7. [JQUERY](https://jquery.com/)
8. [AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)

# Local File Description

Below are the description for all local files:

1. Main folder:
   1. server.js - A JS file for setting up the route to "controller.js", listen to the port and link to the static files (i.e. frontend files: CSS and JS)
   2. package.json - A file keep the project details
2. Config:
   1. connection.js - The JS file keeps the connection details to the database
   2. orm.js - A JS file to keep all the reading and writing query template to/from database
3. Controllers:
   1. burgers_controller.js - A JS file to keep all the routing for the GET/POST/PUT/DELETE request from the frontend JS to the Database
4. DB:
   1. schema.sql - the SQL code for start up the database
   2. seeds.sql - the SQL code for input the seed data for
5. Models:
   1. burger.js - The bridge function from the burger_controllers.js to orm.js for all GET/POST/PUT/DELETE request
6. Public:
   1. Assets:
      1. CSS:
         1. burger_style.css - the CSS styling file for the html output
         2. reset.css - the CSS styling for reset the CSS
      2. IMG - Keep all the images for the html deployment
      3. JS:
         1. burgerFrontEnd.js - the js file to keep all the JS Ajax code for the GET/POST/PUT/DELETE request from the backend
7. Views: (for handlebars)
   1. index.handlebars - the html of the body
   2. layouts:
      1. main.handlebars - the structure for the html when it is returning the result
   3. partials:
      1. burger:
         1. burgerDone.handlebars - the html of the "Served Burger" list
         2. burgerMaking.handlebars - the html of the "Making Burger" list

# Status

Project status: finished

# Create By

Created by Chung Hei Fuk
