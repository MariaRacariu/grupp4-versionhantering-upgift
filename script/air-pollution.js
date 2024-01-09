// This will allow the user to search for a city then you will need
// to display the data about the current weather of that city

// Geocoding
const searchButton = document.querySelector('#searchCityP_button').addEventListener('click', getCityName);
const key = 'd0c746aff0e36b543db10e38ed3e3b6a';
async function getCityName() {
    // console.log('function runs');


    const cityName = document.querySelector('#searchCityP_input').value;
    // console.log(cityName);

    const cityLocationLink = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${key}`;

    try {
        const cityLocationResponse = await fetch(cityLocationLink);
        // console.log(cityLocationResponse);
        if (cityLocationResponse.ok) {
            const cityLocationData = await cityLocationResponse.json();
            getCityInfo(cityLocationData);
        }
    } catch (error) {
        console.log(error);
    }

}

async function getCityInfo(data) {
    // console.log(data);
    for (const item of data) {
        const lon = item.lon;
        const lat = item.lat;
        // console.log(lon);
        // console.log(lat);

        const contentDataHome = document.querySelector('#contentDataHome');

        const cityContainer = document.createElement('div');
        contentDataHome.append(cityContainer);
        cityContainer.classList.add('contentHeader');
        cityContainer.classList.add('display-flex');

        const cityNameHeading = document.createElement('h3');
        cityContainer.append(cityNameHeading);
        const cityName = item.name;
        cityNameHeading.innerText = cityName;

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

                    const cityPollutionHeading = document.createElement('h2');
                    cityContainer.append(cityPollutionHeading);
                    const cityPollutionRank = arrayItem.main.aqi;
                    cityPollutionHeading.innerText = cityPollutionRank;
                }
            }
        } catch (error) {
            console.log(error);
        }

    }
}