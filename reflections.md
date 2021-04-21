# Reflections

- The Demonstrations lack accompanying supplemental documentation
  - It is expected of the students to go back and pull out information from the videos
    - timestamps added - this is helpful
    - still want documentation specific to each lab
- Trello or GitHub / honestly seeing both in full blown development mode setup like a sandbox should be the standard from the start.
  - sandbox : Trello in 102 { `outlines assignment requirements` }
  - sandbox : Trello in 201 { `outlines assignment requirements` }
  - sandbox : Github project board in 201 { `Used Collaboratively On Final Project` }
  - sandbox : Trello in 301 { `outlines assignment requirements` }
- If I need to create an account on a new website there should be a step by step guide of images to follow, **this is a pretty standard accessibility need in any environment**.
  - will meet with John over a series of dates to speak content
- Disability department??? Curiosity??? Does code fellows value accessibility? Do they know what the general education standards are?? are we skating by or setting bars?
  - will meet with John over a series of dates to speak content
- Obtain class materials within 24hrs of payment for any class (request)
- calsses should have no less than 2 to 3 weeks between them, students learners need rest and staff should be refining skills during this time. Be that mentoring each other collaborating on advancements that better the learning environment or resting themselves etc. (request)

## Questions

- [X] how do I print this tree in my command line? { `Instructor Ryan answered this` }
  - [X] CD into src to avoid displaying the node modules

```sh
city-explorer-api
   ├── .env
   ├── .eslintrc.json
   ├── .gitignore
   ├── data
   |   └── weather.json
   ├── package-lock.json
   ├── package.json
   ├── README.md
   └── server.js
```

[⇐ README.md](README.md)

```JSX
// Code Removed from App.js
{this.state.error ? <h3>{this.state.error}</h3> : ''}
{/* Update the page with the returned `display_name`, latitude, and    longitude, displayed nicely in an appropriate Bootstrap component. */}
{this.state.cityData.lat !== undefined ?} <Jumbotron>
<h3>{this.state.cityData.display_name}</h3>
<h5>{this.state.cityData.lat}, {this.state.cityData.lon}</h5> </Jumbotron> 
```

````javascript
Code removed from App.js post lecture refactored and unused in Error.js 
  
// T R Y  &  C A T C H
  // Write code to check for an error, if one is present: do something clever with it

  // try to do something
  try {
    // Request and wait for city LocationIQ data Limit 1 `&limit=1`
    // LocationIQ Docs: https://locationiq.com/docs
    let cityData = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${citySearched}&format=json&limit=1`);
    console.log(cityData);
    let cityICareAboutData = cityData.data[0];
    this.setState({
      cityData: cityICareAboutData
    });
    // write a catch statement for if something goes wrong
  } catch (err) {
    console.log(err);
    this.setState({ error: `${err.message}: ${err.response.data.error}` });
  }
````

## Notable error messages

**4-13-2021 16:57 :** The HTTP 401 Unauthorized client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.


```html
https://stackoverflow.com/questions/7995080/html-if-image-is-not-found

<img id="currentPhoto" src="SomeImage.jpg" onerror="this.onerror=null; this.src='Default.jpg'" alt="" width="100" height="120">
```
