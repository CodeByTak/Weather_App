 
 
 

let weather = {apiKey: "xxxxxxxxxxxxxxxxx",
 
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid=" 
            + this.apiKey
        )
        .then((response)=> response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data; 
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main; 
        const { speed } = data.wind; 
    
        document.querySelector(".city").innerText = "Today's Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " +  humidity + "%"; 
        document.querySelector(".wind").innerText = "Wind speed: " +  speed + "mi/h"; 
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage= "url(https://picsum.photos/1600/800/?" + name + "')"
     

    }, 

    
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button")
.addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event){
    if (event.key == "Enter") {
        weather.search();
    }
})

weather.fetchWeather("Denver");
