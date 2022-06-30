import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weather-app';
  WeatherData:any;
  cityArray:any;
  cityName: any = '';
  constructor(private weatherService:WeatherServiceService) { }

  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.weatherService.getCities().subscribe((data:any)=>{
      this.cityArray = data.cityArr;
    })
    //console.log(this.WeatherData);
  }
  onChamge(){
    this.weatherService.getWeatherData(this.cityName).subscribe(data=>{
      this.setWeatherData(data)
    });
  }

  setWeatherData(data:any){
    this.WeatherData = data;
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
}
