let input = document.querySelector('.searchC')
let city = document.querySelector('.city')
let temp = document.querySelector('.temp')
let wind = document.querySelector('.wind')
let humidity = document.querySelector('.humidity')
let uvIndex = document.querySelector('.uvIndex')
let button = document.querySelector('.button')
let currentTime = moment().format('MM-DD-YYYY')

button.addEventListener('click',() => {
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=8d8d90e6027a9ade8d4ce0c5e4e44d40&units=imperial')
.then(response => response.json())
.then(data => {
    console.log(data)
    let cityValue = data['name'] + ' '+ '('+ currentTime +')';
    let tempValue = 'Temp: '+data['main']['temp'] +"°"
    let windValue = 'Wind: ' + data['wind']['speed'] + ' MPH'
    let humidityValue = 'Humidity: ' +data['main']['humidity'] +'%'
    let uvIndexValue = 'UV Index: ';

    humidity.innerHTML = humidityValue;
    wind.innerHTML = windValue;
    temp.innerHTML = tempValue;
    city.innerHTML = cityValue;
})
.catch(err => alert('wrong city name'))
console.log(input.value)
console.log(wind[1])
})
console.log(currentTime)