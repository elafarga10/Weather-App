let temp = document.querySelector(".weather__temp");
let icon = document.querySelector(".weather__icon--display");
let city = document.querySelector(".weather__location");




function getWeather() {
    let url = "https://api.weatherapi.com/v1/current.json?key=588781a2bffb4d22871224158200309&q=London";

    let values;

    let data = fetch(url)
    .then((resp) => resp.json())
    .then((resp) => {
        console.log(resp);
        temp.innerHTML = `${resp.current.temp_f} F`;
        icon.src = resp.current.condition.icon;
        city.innerHTML = resp.location.name;
        console.log(icon.src);
    })
    .catch(error => console.log(error))
}

getWeather();