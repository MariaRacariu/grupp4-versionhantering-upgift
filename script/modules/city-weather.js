// Javascript for searching the weather by city name and displaying info.
const errorMsgEl = document.querySelector('#errorMsg')

export async function weatherFetch(country) {

    const apikey = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apikey}&units=metric`;
    const response = await fetch(url);
    if (response.ok) {
        errorMsgEl.innerHTML = "";
        const data = await response.json();
        console.log(data);
        return data;
    }
    else if (response.status === 404) throw 'not found'

    else throw 'error'
}
export function displayData(fetchdata) {
    const cityEl = document.querySelector('#dataCity');
    let tempratureEl = document.querySelector('#dataTemparature');
    const iconEl = document.querySelector('#weatherIcon');
    const feelEl = document.querySelector('#feelslike-el');

    feelEl.innerHTML = `Feels like: ${fetchdata.main.feels_like.toFixed()} &#8451`

    cityEl.innerText = fetchdata.name;
    tempratureEl.innerHTML = `${fetchdata.main.temp.toFixed()} &#8451`;
    for (const value of fetchdata.weather) {
        const icon = value.icon;
        iconEl.src = `https://openweathermap.org/img/wn/${icon}.png`;
    }


}
export function errorHandler(error) {
    let message;
    if (error === 'not found') message = 'City not found'
    else message = 'something went wrong...try again later'
    errorMsgEl.innerText = message;

}
