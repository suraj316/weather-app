import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  url = 'https://api.openweathermap.org/data/2.5/weather'
  constructor(private http:HttpClient) { }
  public getWeatherData(city:string){
    let queryParam = {q:city,appid:'ff1bc4683fc7325e9c57e586c20cc03e'}
    let query = new HttpParams({fromObject:queryParam})
    return this.http.get(this.url,{params:query})
  }
  public getCities(){
    return this.http.get("../assets/city.json")
  }
}
