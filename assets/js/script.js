// Display variables
let input = document.querySelector('.searchC')
let city = document.querySelector('.city')
let temp = document.querySelector('.temp')
let wind = document.querySelector('.wind')
let humidity = document.querySelector('.humidity')
let uvIndex = document.querySelector('.uvIndex')
let button = document.querySelector('.button')
// Card Variables
let Card1 = document.querySelector('.first')
let Card2 = document.querySelector('.second')
let Card3 = document.querySelector('.third')
let Card4 = document.querySelector('.fourth')
let Card5 = document.querySelector('.fifth')
let img = ""
let historyDiv = document.querySelector('.history')
let cityArray = {};
let lsDiv = document.createElement('div')
// Moment variables
let currentTime = moment().format('MM-DD-YYYY')


// Displays Weather for Whatever City Is Input
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
})


// Displays 5 Day Forcast
button.addEventListener('click', () =>{
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ input.value+ '&appid=8d8d90e6027a9ade8d4ce0c5e4e44d40&units=imperial')
    .then(response => response.json())
    .then(data => {
        
         for(i = -1; i < data['list'].length; i++ )
        if(data['list']['0']['clouds']['all'] > 100){
            img =`<img src="/assets/img/2849803_cloudy_cloud_weather_multimedia_icon.png"></img>`
            console.log("success")
        }else if(data['list']['0']['clouds']['all']< 91){
            img = `<img src="/assets/img/4102326_cloud_sun_sunny_weather_icon.png"></img>`
        }else if(data['list']['0']['clouds']['all']< 50 ){
    img = `<img src="/assets/img/2995005_sun_sunny_yellow_weather_beach_icon.png"></img>`
        }
        Card1.innerHTML = ` <h5> ${moment().add(1, 'days').format('MM-DD-YYYY')}<h5>
        <p>
        Temp: ${data['list']['0']['main']['temp']}°<br>
        ${img}
       <br> Wind: <br>
        <br>Humidity: <br>
        <p>
        `

        Card2.innerHTML = ` <h5> ${moment().add(2, 'days').format('MM-DD-YYYY')}<h5>
        <p>
        Temp: ${data['list']['1']['main']['temp']}°<br>
        ${img}
       <br> Wind: <br>
        <br>Humidity: <br>
        <p>
        `

        Card3.innerHTML = ` <h5> ${moment().add(3, 'days').format('MM-DD-YYYY')}<h5>
        <p>
        Temp: ${data['list']['2']['main']['temp']}°<br>
        ${img}
       <br> Wind: <br>
        <br>Humidity: <br>
        <p>
        `

        Card4.innerHTML = ` <h5> ${moment().add(4, 'days').format('MM-DD-YYYY')}<h5>
        <p>
        Temp: ${data['list']['3']['main']['temp']}°<br>
        ${img}
       <br> Wind: <br>
        <br>Humidity: <br>
        <p>
        `

        Card5.innerHTML = ` <h5> ${moment().add(5, 'days').format('MM-DD-YYYY')}<h5>
        <p>
        Temp: ${data['list']['4']['main']['temp']}°<br>
        ${img}
       <br> Wind: <br>
        <br>Humidity: <br>
        <p>
        `
        console.log(data)
})
})
button.addEventListener('click', () =>{
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ input.value+ '&appid=8d8d90e6027a9ade8d4ce0c5e4e44d40&units=imperial')
    .then(response => response.json())
    .then(data => {
       
    })
})

// Loads
const fiveDayOnload = () =>{
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=miami&appid=8d8d90e6027a9ade8d4ce0c5e4e44d40&units=imperial')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
      // Start OF For Loop
        for(i = 0; i < 5; i++ ){
        if(data['list'][i]['clouds']['all'] >= 100){
            img =`<img src="/assets/img/2849803_cloudy_cloud_weather_multimedia_icon.png"></img>`
            console.log("cloudy")
        }else if(data['list'][i]['clouds']['all']< 91){
            img = `<img src="/assets/img/4102326_cloud_sun_sunny_weather_icon.png"></img>`
            console.log("Partly Cloudy")
        }else if(data['list'][i]['clouds']['all']< 50 ){
    img = `<img src="/assets/img/2995005_sun_sunny_yellow_weather_beach_icon.png"></img>`
        }
        Card1.innerHTML = ` <h5> ${moment().add(1, 'days').format('MM-DD-YYYY')}<h5>
        <p>
        Temp: ${data['list'][i]['main']['temp']}°<br>
        ${img}
       <br> Wind: <br>
        <br>Humidity: <br>
        <p>
        `
        
        i++


        // Card 1 Of Weather
        if(data['list'][i]['clouds']['all'] >= 100){
            img =`<img src="/assets/img/2849803_cloudy_cloud_weather_multimedia_icon.png"></img>`
            console.log("success")
        }else if(data['list'][i]['clouds']['all'] < 100){
            img = `<img src="/assets/img/4102326_cloud_sun_sunny_weather_icon.png"></img>`
        }else if(data['list'][i]['clouds']['all'] < 60 ){
    img = `<img src="/assets/img/2995005_sun_sunny_yellow_weather_beach_icon.png"></img>`
        }
        Card2.innerHTML = ` <h5> ${moment().add(2, 'days').format('MM-DD-YYYY')}<h5>
        <p>
        Temp: ${data['list'][i]['main']['temp']}°<br>
        ${img}
       <br> Wind: <br>
        <br>Humidity: <br>
        <p>
        `
        i++


        // Card 3 Of Weather
        if(data['list'][i]['clouds']['all'] >= 100){
            img =`<img src="/assets/img/2849803_cloudy_cloud_weather_multimedia_icon.png"></img>`
            console.log("success")
        }else if(data['list'][i]['clouds']['all'] < 100){
            img = `<img src="/assets/img/4102326_cloud_sun_sunny_weather_icon.png"></img>`
        }else if(data['list'][i]['clouds']['all'] < 60 ){
    img = `<img src="/assets/img/2995005_sun_sunny_yellow_weather_beach_icon.png"></img>`
        }
        Card3.innerHTML = ` <h5> ${moment().add(3, 'days').format('MM-DD-YYYY')}<h5>
        <p>
        Temp: ${data['list'][i]['main']['temp']}°<br>
        ${img}
       <br> Wind: <br>
        <br>Humidity: <br>
        <p>
        `
        i++


        //  Card 4 Of Weather
        if(data['list'][i]['clouds']['all'] >= 100){
            img =`<img src="/assets/img/2849803_cloudy_cloud_weather_multimedia_icon.png"></img>`
            console.log("success")
        }else if(data['list'][i]['clouds']['all']< 100){
            img = `<img src="/assets/img/4102326_cloud_sun_sunny_weather_icon.png"></img>`
        }else if(data['list'][i]['clouds']['all']< 60 ){
    img = `<img src="/assets/img/2995005_sun_sunny_yellow_weather_beach_icon.png"></img>`
        }
        Card4.innerHTML = ` <h5> ${moment().add(4, 'days').format('MM-DD-YYYY')}<h5>
        <p>
        Temp: ${data['list'][i]['main']['temp']}°<br>
        ${img}
       <br> Wind: <br>
        <br>Humidity: <br>
        <p>
        `
        i++


        //Card 5 Of Weather
        if(data['list'][i]['clouds']['all'] >= 100){
            img =`<img src="/assets/img/2849803_cloudy_cloud_weather_multimedia_icon.png"></img>`
            console.log("success")
        }else if(data['list'][i]['clouds']['all']< 100){
            img = `<img src="/assets/img/4102326_cloud_sun_sunny_weather_icon.png"></img>`
        }else if(data['list'][i]['clouds']['all']< 60 ){
    img = `<img src="/assets/img/2995005_sun_sunny_yellow_weather_beach_icon.png"></img>`
        }
        Card5.innerHTML = ` <h5> ${moment().add(5, 'days').format('MM-DD-YYYY')}<h5>
        <p>
        Temp: ${data['list'][i]['main']['temp']}°<br>
        ${img}
       <br> Wind: <br>
        <br>Humidity: <br>
        <p>
        `
    }
    })
}


// Function Loads Milwaukee as default 
const apiOnload = () => {
fetch('https://api.openweathermap.org/data/2.5/weather?q=lasvegas&appid=8d8d90e6027a9ade8d4ce0c5e4e44d40&units=imperial')
.then(response => response.json())
.then(data => {
    console.log(data)
    if(data['clouds']['all'] > 100){
        img =`<img src="/assets/img/2849803_cloudy_cloud_weather_multimedia_icon.png"></img>`
        console.log("success")
    }else if(data['clouds']['all']< 91){
        img = `<img src="/assets/img/4102326_cloud_sun_sunny_weather_icon.png"></img>`
    }else if(day['clouds']['all']< 50 ){
img = `<img src="/assets/img/2995005_sun_sunny_yellow_weather_beach_icon.png"></img>`
    }
    let cityValue = data['name'] + ' '+ '('+ currentTime +')'+ img;
    let tempValue = 'Temp: '+data['main']['temp'] +"°"
    let windValue = 'Wind: ' + data['wind']['speed'] + ' MPH'
    let humidityValue = 'Humidity: ' +data['main']['humidity'] +'%'
    let uvIndexValue = 'UV Index: ';

    humidity.innerHTML = humidityValue;
    wind.innerHTML = windValue;
    temp.innerHTML = tempValue;
    city.innerHTML = cityValue;
    
})
}


// 
$(".button").on("click", () =>{
        localStorage.setItem('names',input.value)
    
    lsDiv.className = 'searchHistory'
    lsDiv.textContent = localStorage.getItem('names')
    historyDiv.appendChild(lsDiv)
    
console.log(cityArray)
  console.log("Finished")
})

const loadHistory = () =>{
    lsDiv.className = 'searchHistory'
    lsDiv.textContent = localStorage.getItem('names')
    historyDiv.appendChild(lsDiv)
    
   
}

setInterval(loadHistory(),1000)
apiOnload()
fiveDayOnload()