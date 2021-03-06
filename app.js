window.addEventListener("load", getWeather => {
    let icon = document.querySelector('.icon');
    let temp = document.querySelector('.temperature__degree');
    let city = document.querySelector('.temperature__location');
    let timezone = document.querySelector('.location__timezone');
    let description = document.querySelector('.temperature__description')
    let lat;
    let long;
    navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        let url = `https://api.weatherapi.com/v1/current.json?key=588781a2bffb4d22871224158200309&q=${lat},${long}`;

        fetch(url)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            description.innerHTML = data.current.condition.text;
            timezone.innerHTML = data.location.tz_id;
            icon.src = data.current.condition.icon;
            temp.innerHTML = data.current.temp_f;
            city.innerHTML = data.location.name;
        })

    })
})
