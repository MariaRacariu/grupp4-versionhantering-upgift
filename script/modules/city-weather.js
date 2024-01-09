// Javascript for searching the weather by city name and displaying info.
export async function weatherFetch(country) {
    const apikey = '0c3cc91b87e044a264bca95e28a9e445'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apikey}&units=metric`
    const response = await fetch(url)
    console.log(response);
    const data = await response.json()
    console.log(data);
    return data;
}

export function displayData(fetchdata) {
    const cityEl = document.querySelector('#dataCity')
    let tempratureEl = document.querySelector('#dataTemparature')
    cityEl.innerText = fetchdata.name
    tempratureEl.innerText = fetchdata.main.temp

}

export function removePrevSearchResult() {
    const mainResultContainer = document.querySelector('.contentHeader');
    mainResultContainer.innerHTML = '';
}

export function errorHandler(error) {

}