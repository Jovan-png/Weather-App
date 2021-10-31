// Display variables
var input = document.querySelector('.searchC');
var city = document.querySelector('.city');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var uvIndex = document.querySelector('.uvIndex');
var button = document.querySelector('.button');
var hButton = document.querySelector('.hello');
// Card Variables
var weatherCard = document.querySelector('.weatherCard');
var historyDiv = document.querySelector('.history');
var cityArray = [];
var cities = JSON.parse(localStorage.getItem('cityHistory')) || [];
// 
var card1 = document.querySelector('.one');
var card2 = document.querySelector('.two');
var card3 = document.querySelector('.three');
var card4 = document.querySelector('.four');
var card5 = document.querySelector('.five');

// Moment variables
var currentTime = moment().format('MM-DD-YYYY')


// Function Loads Milwaukee as default 
const apiOnload = () => {
fetch('https://api.openweathermap.org/data/2.5/weather?q=milwaukee&appid=8d8d90e6027a9ade8d4ce0c5e4e44d40&units=imperial')
.then(response => response.json())
.then(response => { console.log(response.main.temp)

let cityValue = response.name + ' '+ '('+ currentTime +')'+`<img src=" http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png"></img>`
    let tempValue = 'Temp: '+response.main.temp +"°"
    let windValue = 'Wind: ' + response.wind.speed + ' MPH'
    let humidityValue = 'Humidity: ' +response.main.humidity +'%'


    humidity.innerHTML = humidityValue;
    wind.innerHTML = windValue;
    temp.innerHTML = tempValue;
    city.innerHTML = cityValue;


    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+response.coord.lat+'&lon='+response.coord.lon+'&appid=8d8d90e6027a9ade8d4ce0c5e4e44d40&units=imperial')
.then(response => response.json())
.then(data => {
    console.log(data)
    let uvIndexValue = data.current.uvi;
    uvIndex.innerHTML = uvIndexValue;
    if(data.current.uvi <= 2 ){
      uvIndex.classList.add('low')

    }else if (data.current.uvi > 2 || data.current.uvi < 5  ){
      uvIndex.classList.add('moderate')
    }else if (data.current.uvi > 5 || data.current.uvi < 7  ){
      uvIndex.classList.add('high')
    }else if(data.current.uvi > 7 || data.current.uvi < 10  ){
      uvIndex.classList.add('veryhigh')
    }else if(data.current.uvi > 7 || data.current.uvi < 10  ){
      uvIndex.classList.add('extreme')
    }
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=milwaukee&appid=8d8d90e6027a9ade8d4ce0c5e4e44d40&units=imperial')
    .then(response => response.json())
    .then(response => {
     

    card1.innerHTML =  ` ${moment().add([1], 'days').format('MM-DD-YYYY')}<br>
    <img src=" http://openweathermap.org/img/wn/${response.list[1].weather[0].icon}@2x.png">
    Temp: ${response.list[1].main.temp}° <br>
    Wind: ${response.list[1].wind.speed}MPH <br>
    <br>  Humidity: ${response.list[1].main.humidity}%
    `
    card2.innerHTML =  ` ${moment().add([2], 'days').format('MM-DD-YYYY')}<br>
    <img src=" http://openweathermap.org/img/wn/${response.list[2].weather[0].icon}@2x.png">
    Temp: ${response.list[2].main.temp}° <br>
    Wind: ${response.list[2].wind.speed}MPH <br>
    <br>  Humidity: ${response.list[2].main.humidity}%
    `
    card3.innerHTML =  ` ${moment().add([3], 'days').format('MM-DD-YYYY')}<br>
    <img src=" http://openweathermap.org/img/wn/${response.list[3].weather[0].icon}@2x.png">
    Temp: ${response.list[3].main.temp}° <br>
    Wind: ${response.list[3].wind.speed}MPH <br>
    <br>   Humidity: ${response.list[3].main.humidity}%
    `
    card4.innerHTML =  ` ${moment().add([4], 'days').format('MM-DD-YYYY')}<br>
    <img src=" http://openweathermap.org/img/wn/${response.list[4].weather[0].icon}@2x.png">
    Temp: ${response.list[4].main.temp}° <br>
    Wind: ${response.list[4].wind.speed}MPH <br>
   <br> Humidity: ${response.list[4].main.humidity}%
    `
    card5.innerHTML =  ` ${moment().add([5], 'days').format('MM-DD-YYYY')}<br>
    <img src=" http://openweathermap.org/img/wn/${response.list[5].weather[0].icon}@2x.png">
    Temp: ${response.list[5].main.temp}° <br>
    Wind: ${response.list[5].wind.speed}MPH <br>
    <br>   Humidity: ${response.list[5].main.humidity}%
    `
 
})
})
})
}


// Displays Weather for Whatever City Is Input
button.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=8d8d90e6027a9ade8d4ce0c5e4e44d40&units=imperial')
    .then(response => response.json())
    .then(response => {
    
        let cityValue = response.name + ' '+ '('+ currentTime +')';
        let tempValue = 'Temp: '+response.main.temp +"°"
        let windValue = 'Wind: ' + response.wind.speed + ' MPH'
        let humidityValue = 'Humidity: ' +response.main.humidity +'%'
    
    
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
        temp.innerHTML = tempValue;
        city.innerHTML = cityValue;
        fetch('https://api.openweathermap.org/d5/onecall?lat='+response.coord.lat+'&lon='+response.coord.lon+'&appid=8d8d90e6027a9ade8d4ce0c5e4e44d40&units=imperial')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let uvIndexValue = data.current.uvi;
        uvIndex.innerHTML = uvIndexValue;
        if(data.current.uvi <= 2 ){
          uvIndex.classList.add('low')

        }else if (data.current.uvi > 2 || data.current.uvi < 5  ){
          uvIndex.classList.add('moderate')
        }else if (data.current.uvi > 5 || data.current.uvi < 7  ){
          uvIndex.classList.add('high')
        }else if(data.current.uvi > 7 || data.current.uvi < 10  ){
          uvIndex.classList.add('veryhigh')
        }else if(data.current.uvi > 7 || data.current.uvi < 10  ){
          uvIndex.classList.add('extreme')
        }
        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ input.value+ '&appid=8d8d90e6027a9ade8d4ce0c5e4e44d40&units=imperial')
        .then(response => response.json())
        .then(response => {
         
    card1.innerHTML =  ` ${moment().add([1], 'days').format('MM-DD-YYYY')}<br>
    <img src=" http://openweathermap.org/img/wn/${response.list[1].weather[0].icon}@2x.png">
    Temp: ${response.list[1].main.temp}° <br>
    Wind: ${response.list[1].wind.speed}MPH <br>
    <br>  Humidity: ${response.list[1].main.humidity}%
    `
    card2.innerHTML =  ` ${moment().add([2], 'days').format('MM-DD-YYYY')}<br>
    <img src=" http://openweathermap.org/img/wn/${response.list[2].weather[0].icon}@2x.png">
    Temp: ${response.list[2].main.temp}° <br>
    Wind: ${response.list[2].wind.speed}MPH <br>
    <br> Humidity: ${response.list[2].main.humidity}%
    `
    card3.innerHTML =  ` ${moment().add([3], 'days').format('MM-DD-YYYY')}<br>
    <img src=" http://openweathermap.org/img/wn/${response.list[3].weather[0].icon}@2x.png">
    Temp: ${response.list[3].main.temp}° <br>
    Wind: ${response.list[3].wind.speed}MPH <br>
    <br> Humidity: ${response.list[3].main.humidity}%
    `
    card4.innerHTML =  ` ${moment().add([4], 'days').format('MM-DD-YYYY')}<br>
    <img src=" http://openweathermap.org/img/wn/${response.list[4].weather[0].icon}@2x.png">
    Temp: ${response.list[4].main.temp}° <br>
    Wind: ${response.list[4].wind.speed}MPH <br>
    <br>  Humidity: ${response.list[4].main.humidity}%
    `
    card5.innerHTML =  ` ${moment().add([5], 'days').format('MM-DD-YYYY')}<br>
    <img src=" http://openweathermap.org/img/wn/${response.list[5].weather[0].icon}@2x.png">
    Temp: ${response.list[5].main.temp}° <br>
    Wind: ${response.list[5].wind.speed}MPH <br>
    <br>  Humidity: ${response.list[5].main.humidity}%
    `
            
            
    })
    })
    })
    
    })
    


//Goes through the array and appends the localStorage Search History
renderHistory = (cities ,event)=>{
    console.log("hello")
    for( i = 0; i < cities.length ; i++){
    var historyItem = document.createElement('p')
    historyItem.className = 'hello'
    historyItem.textContent = cities[i]
    historyDiv.appendChild(historyItem)

}

}
// Sets and appends whatever city was input.
 button.addEventListener('click', () =>{
  var currentSearch = $('.searchC')
  .val()
  .trim()
  var historyItem = document.createElement('p')

    historyItem.className = 'hello'
    historyItem.textContent= currentSearch;
    $('.history').append(historyItem);
    cities.push(currentSearch)
    localStorage.setItem('cityHistory', JSON.stringify(cities))
    historyItem.addEventListener('click', ()=>{

    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+historyItem.textContent+'&appid=8d8d90e6027a9ade8d4ce0c5e4e44d40&units=imperial')
    .then(response => response.json())
    .then(response => {
    
        let cityValue = response.name + ' '+ '('+ currentTime +')';
        let tempValue = 'Temp: '+response.main.temp +"°"
        let windValue = 'Wind: ' + response.wind.speed + ' MPH'
        let humidityValue = 'Humidity: ' +response.main.humidity +'%'
    
    
        humidity.innerHTML = humidityValue;
        wind.innerHTML = windValue;
        temp.innerHTML = tempValue;
        city.innerHTML = cityValue;
        fetch('https://api.openweathermap.org/d5/onecall?lat='+response.coord.lat+'&lon='+response.coord.lon+'&appid=8d8d90e6027a9ade8d4ce0c5e4e44d40&units=imperial')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let uvIndexValue = 'UV Index: ' + data.current.uvi;
        uvIndex.innerHTML = uvIndexValue;
        if(data.current.uvi <= 2 ){
          uvIndex.classList.add('low')
    
        }else if (data.current.uvi > 2 || data.current.uvi < 5  ){
          uvIndex.classList.add('moderate')
        }else if (data.current.uvi > 5 || data.current.uvi < 7  ){
          uvIndex.classList.add('high')
        }else if(data.current.uvi > 7 || data.current.uvi < 10  ){
          uvIndex.classList.add('veryhigh')
        }else if(data.current.uvi > 7 || data.current.uvi < 10  ){
          uvIndex.classList.add('extreme')
        }
        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ historyItem.textContent+ '&appid=8d8d90e6027a9ade8d4ce0c5e4e44d40&units=imperial')
        .then(response => response.json())
        .then(response => {
         
    card1.innerHTML =  ` ${moment().add([1], 'days').format('MM-DD-YYYY')}<br>
    <img src=" http://openweathermap.org/img/wn/${response.list[1].weather[0].icon}@2x.png">
    Temp: ${response.list[1].main.temp}° <br>
    Wind: ${response.list[1].wind.speed}MPH <br>
    Humidity: ${response.list[1].main.humidity}%
    `
    card2.innerHTML =  ` ${moment().add([2], 'days').format('MM-DD-YYYY')}<br>
    <img src=" http://openweathermap.org/img/wn/${response.list[2].weather[0].icon}@2x.png">
    Temp: ${response.list[2].main.temp}° <br>
    Wind: ${response.list[2].wind.speed}MPH <br>
    Humidity: ${response.list[2].main.humidity}%
    `
    card3.innerHTML =  ` ${moment().add([3], 'days').format('MM-DD-YYYY')}<br>
    <img src=" http://openweathermap.org/img/wn/${response.list[3].weather[0].icon}@2x.png">
    Temp: ${response.list[3].main.temp}° <br>
    Wind: ${response.list[3].wind.speed}MPH <br>
    Humidity: ${response.list[3].main.humidity}%
    `
    card4.innerHTML =  ` ${moment().add([4], 'days').format('MM-DD-YYYY')}<br>
    <img src=" http://openweathermap.org/img/wn/${response.list[4].weather[0].icon}@2x.png">
    Temp: ${response.list[4].main.temp}° <br>
    Wind: ${response.list[4].wind.speed}MPH <br>
    Humidity: ${response.list[4].main.humidity}%
    `
    card5.innerHTML =  ` ${moment().add([5], 'days').format('MM-DD-YYYY')}<br>
    <img src=" http://openweathermap.org/img/wn/${response.list[5].weather[0].icon}@2x.png">
    Temp: ${response.list[5].main.temp}° <br>
    Wind: ${response.list[5].wind.speed}MPH <br>
    Humidity: ${response.list[5].main.humidity}%
    `
            
            
    })
    })
    })

  })
    
})








apiOnload();
renderHistory(cities);