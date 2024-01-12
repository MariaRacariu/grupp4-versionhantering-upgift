// This will allow the user to search for a city then you will need
// to display the data about the current weather of that city

const searchButton = document
  .querySelector("#searchCityP_button")
  .addEventListener("click", getCityName);

const key = "d0c746aff0e36b543db10e38ed3e3b6a";
const contentDataHome = document.querySelector("#contentDataHome");

// Geocoding
async function getCityName() {
  while (contentDataHome.firstChild) {
    contentDataHome.removeChild(contentDataHome.firstChild);
  }
  // console.log('function runs');

  const cityName = document.querySelector("#searchCityP_input").value;
  // console.log(cityName);

  if (cityName === "") {
    const errorElement = document.createElement("p");
    contentDataHome.append(errorElement);
    errorElement.innerText = "Please input a city";
  }
  const cityLocationLink = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${key}`;

  try {
    const cityLocationResponse = await fetch(cityLocationLink);
    // console.log(cityLocationResponse);
    if (cityLocationResponse.ok) {
      const cityLocationData = await cityLocationResponse.json();

      if (cityLocationData.length == 0) {
        // console.log('This does not exist');

        const errorElement = document.createElement("p");
        contentDataHome.append(errorElement);
        errorElement.innerText = "This city does not exist";
      } else {
        getCityInfo(cityLocationData);
      }
    }
  } catch (error) {
    // console.log(error);

    const errorElement = document.createElement("p");
    contentDataHome.append(errorElement);
    errorElement.innerText = "This is currently unavailable. Please try later";
  }
}

async function getCityInfo(data) {
  // console.log(data);

  for (const item of data) {
    const lon = item.lon;
    const lat = item.lat;
    // console.log(lon);
    // console.log(lat);

    const cityContainer = document.createElement("div");
    contentDataHome.append(cityContainer);
    cityContainer.classList.add("polutionCard");
    const cityNameHeading = document.createElement("b");
    cityNameHeading.classList.add("polutionCard_city");
    cityContainer.append(cityNameHeading);
    const cityName = item.name;
    cityNameHeading.innerText = cityName;

    const cityNameCountryHeading = document.createElement("p");
    cityNameCountryHeading.classList.add("polutionCard_country");
    cityContainer.append(cityNameCountryHeading);
    const cityNameCountry = item.country;
    cityNameCountryHeading.innerText = cityNameCountry;

    const cityPollutionLink = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`;

    try {
      const cityPollutionResponse = await fetch(cityPollutionLink);
      // console.log(cityPollutionResponse);

      if (cityPollutionResponse.ok) {
        const cityPollutionData = await cityPollutionResponse.json();
        // console.log(cityPollutionData);

        const cityPollutionObj = cityPollutionData.list;

        // console.log(cityPollutionObj);

        for (const arrayItem of cityPollutionObj) {
          // console.log(arrayItem);

          const cityPollutionHeading = document.createElement("p");
          cityPollutionHeading.classList.add("polutionCard_index");
          cityContainer.append(cityPollutionHeading);
          const cityPollutionRank = arrayItem.main.aqi;
          cityContainer.classList.add("polution-" + cityPollutionRank);
          cityPollutionHeading.innerText = cityPollutionRank;

          if (cityPollutionRank === 1) {
            // console.log('Good');

            const cityPollutionRankDescription = document.createElement("p");
            cityContainer.append(cityPollutionRankDescription);
            cityPollutionRankDescription.innerText = "Good";
          } else if (cityPollutionRank === 2) {
            // console.log('Fair');

            const cityPollutionRankDescription = document.createElement("p");
            cityContainer.append(cityPollutionRankDescription);
            cityPollutionRankDescription.innerText = "Fair";
          } else if (cityPollutionRank === 3) {
            // console.log('Moderate');

            const cityPollutionRankDescription = document.createElement("p");
            cityContainer.append(cityPollutionRankDescription);
            cityPollutionRankDescription.innerText = "Moderate";
          } else if (cityPollutionRank === 4) {
            // console.log('Poor');

            const cityPollutionRankDescription = document.createElement("p");
            cityContainer.append(cityPollutionRankDescription);
            cityPollutionRankDescription.innerText = "Poor";
          } else if (cityPollutionRank === 5) {
            // console.log('Very Poor');

            const cityPollutionRankDescription = document.createElement("p");
            cityContainer.append(cityPollutionRankDescription);
            cityPollutionRankDescription.innerText = "Very Poor";
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
