const API_KEY = `410a0cbc1b398fe517570b87c77a093b`;

const searchTemperature = () => {
    const cityText = document.getElementById("city-name");
    const city = cityText.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
   cityText.value = ""
    
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
  
}

const setInnertext = (id, text) => {
    document.getElementById(id).innerText = text
}

const displayTemperature = temp => {
    // console.log(temp);
    setInnertext("city", temp.name);
    setInnertext("temperature", temp.main.temp);
    setInnertext("condition", temp.weather[0].main);

    const url = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;

    const imgIcon = document.getElementById("weather-icon");
    imgIcon.setAttribute("src", url);
} 