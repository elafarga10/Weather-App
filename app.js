let temp = document.querySelector(".weather__temp");





function getWeather() {
    let url = "https://api.weatherapi.com/v1/current.json?key=588781a2bffb4d22871224158200309&q=Los Angeles";

    let values;

    let data = fetch(url)
    .then((resp) => resp.json())
    .then((resp) => {
        console.log(resp);
        temp.innerHTML = resp.current.temp_f;
    })
    .catch(error => console.log(error))

    console.log(values);
}

getWeather();