# 🗺️ city-explorer

**Author**: Aloysious

**Version**: 1.0.1

+ [{ `city-explorer Trello Project Board` }](https://trello.com/b/0jJjZi3c/city-explorer-trello-board)

<!-- increment the patch/fix/version number if you make more commits past your first submission -->


## Overview

<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started

<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture

<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log

04-07-2021 11:22pm - **Launched on Netlyify** : https://confident-thompson-632e1c.netlify.app/

04-06-2021 9:22pm - **Repository Created** : https://github.com/AL0YSI0US/city-explorer


<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. 
-->

## T I M E . E S T I M A T E S

## ⚙️ **React repository & API keys** : Feature One


Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
#### Repository Configuration:

- [ ] Ensure repository matches file configuration map
- [X] Convert the `README.md` file to be documentation regarding your lab and its current state of development.
- [X] post on deployed app web address in github settings
- [ ] Add a `.gitignore` file with React configurations, including ignoring of `.env`.
- [ ] Create a `package.json` file with all dependencies and any associated details related to configuration. The dependencies needed for today's lab include: Axios and Bootstrap.
- [ ] Create a PR of your basic React app to your `main` branch. Thanks to the "Deploy Preview" feature of Netlify, your branch will be deployed so you can see it live, even before you merge it to `main`. As you work through the lab, push all your work to the same PR, verifying it's working on Netlify as you go.
- [ ] Procure a LocationIQ free-tier account. From the Dashboard, navigate to your API Access Tokens page. View, then Update the existing token, to change the label to "City Explorer".
- [ ] MOST IMPORTANTLY: Add your deployed Netlify app url as an HTTP Referrer to your API token settings. This step is necessary to prevent any unauthorized use of your token.
  - [ ] To add that HTTP Referrer, you'll want to look at your API token on LocationIQ, then click the "Update" button and add in your Netlify site's URL to the HTTP Referrers textbox. It'll add another layer of protection, to make sure nobody else can steal your API key
- [ ] Create an `.env` file: Your API key goes here for local development. Make sure this file is in your `.gitignore`.
- [ ] Add your API key to your Netlify deployment. Under "Site settings" > "Build & deploy" > "Environment", you need to add "Edit variables" to add your API key, giving it the same name you used in your local .env file.

```sh
                           File configuration map

city-explorer
   ├── .env
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   ├── README.md
   ├── public/
   └── src/
      |__App.js
```
## ⚙️ **Locations** : Feature Two

As a user of City Explorer, I want to enter the name of a location so that I can see the exact latitude and longitude of that location.

- [ ] **Given** that a user enters a valid location in the input
- [ ] **When** the user clicks the "Explore!" button
- [ ] **Then** the latitude and longitude will be displayed on the page

```
Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```
## ⚙️ **Map** : Feature Three

As a user, I want to see a map of the city so that I can see the layout of the area I want to explore.

- [ ] **Given** that a user enters a valid location in the input
- [ ] **When** the user clicks the "Explore!" button
- [ ] **Then** the map of the city is displayed on the page.


```
Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```
## ⚙️ **Errors** : Feature Four

As a user, I want clear messages if something goes wrong so I know if I need to make any changes or try again in a different manner.

- [ ] **Given** that a user does not enter a valid location (eg: empty string) in the input
- [ ] **When** the user clicks the "Explore!" button
- [ ] **Then** the user will receive an error message on the page and the data will not be rendered properly

```
Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

## ❤️ Credit and Collaborations 👥

## Resources

+ [NPM JS](https://www.npmjs.com/package/axios)
+ [locationiq](https://locationiq.com/docs#search-forward-geocoding)

  + *Specifically, the “Search / Forward GeoCoding” and “Static Maps” sections.*
+ seattle-code-301n21/class-04/[**in-form-ation**](https://github.com/codefellows/seattle-code-301n21/tree/main/class-04/demo/in-form-ation/src)/src
+ seattle-code-301n21/class-05/demo/[**city-explorer-react**](https://github.com/codefellows/seattle-code-301n21/tree/main/class-05/demo/city-explorer-react)/
+ seattle-code-301n21/class-05/demo/city-[**demo-city-explorer**](https://github.com/codefellows/seattle-code-301n21/tree/main/class-05/demo/demo-city-explorer)/
+ seattle-code-301n21/class-05/demo/city-**[passing-functions](https://github.com/codefellows/seattle-code-301n21/tree/main/class-03/demo/passing-functions)**/src/

<!-- Give credit (and a link) to other people or resources that helped you build this application. -->



[Reflections ⇒](reflections.md)
