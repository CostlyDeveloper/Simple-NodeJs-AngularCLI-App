# SimpleNodeJsAngularCLIApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

## User Story
The application has 2 responsive pages, Home page, and Contact page. The user is able to fulfill the contact form on the contact page. 
After the form is submitted the contact object with the request is sent to web service API. The project has routing ability and preparation for CRUD operations.

## Folder structure

 -  `blueprint` that bind the frame of the main layout, and it's parts like `header (main menu)`
 -  `pages` that contain HTML frames for the routes like the home page or contact page.
 -  `layouts` that contain different layouts components, blocks or containers to be loaded in page frames.
 -  `layers` in which methods and functions can be used in all segments of the application.

## Available layers

* data-hub layer contains:
   - "**api.service**" with public methods:
    `postService`

- security layer contains:
   - "**security.service**" with public methods:
    `encode`, `decode`
   - "**state.service**" that is responsible to store app config from JSON file: `assets/web-config.json`
    
- user-view layer contains:
    - "**image-processor.service**" presents the repository for all app images and includes public members:
    `getImg` and `ImageList`
    - **animations** that include animation for mobile phone menu slide, and fade-in-out for route changing.
    
## Available pages
- Home page
- Contact us page
