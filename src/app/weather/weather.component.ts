import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  selectedCityId: string = '';
  cities = [
    {name: 'Helsinki', id: 658225},
    {name: 'Espoo', id: 660158},
    {name: 'Tampere', id: 634963},
    {name: 'Turku', id: 633679},
    {name: 'Lahti', id: 649360},
    {name: 'Oulu', id: 643492}
  ];

  imagePath: string = '';
  temp: string = '';
  temp_feels: string = '';
  wind: string = '';
  description: string = '';

  getPath = (): string => {
    const apiKey: string = '1bc0bd00a65d0503d31deb107a54f1d7';
    const cityID: number = parseInt(this.selectedCityId);
    const lang: string = 'fi';
    const units: string = 'metric';
    return `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&lang=${lang}&units=${units}&appid=${apiKey}`;
  }
  getWeathetData = () => {
    let weatherUrl: string = '';
    if (this.selectedCityId !== "") {
      console.log("Weather data! " + this.getPath());
      weatherUrl = this.getPath();

      fetch(weatherUrl)
        .then((response) => {
            return response.json();
        }).then((json) => {
        // kutsutaan funktio, joka kuvaa vastaukset näytölle
        this.displaySelectedCityWeather(json);
      }).catch((error) => {   // jos tapahtu virhe, annetaan virheilmoitus
          console.log(error)
      })
    }
  }

  displaySelectedCityWeather = (data: any) => {
    console.log("Got result for - " + data.main.temp + ' °C');
    console.log("Wind speed " + data.wind.speed + " m/s");
    console.log("Tuntuu kuin: " + data.main.feels_like + ' °C');
    console.log("Description: " + data.weather[0].description);
    this.imagePath = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    this.description = 'Hetkellä ' + data.weather[0].description;
    this.temp = data.main.temp + ' °C';
    this.temp_feels = data.main.feels_like + ' °C';
    this.wind = data.wind.speed + " m/s";
  }
  
}
