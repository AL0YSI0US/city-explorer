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