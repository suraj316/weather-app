import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  url = 'https://api.openweathermap.org/data/2.5/weather'
  constructor(private http:HttpClient) { }
  public getWeatherData(city:string){
    let queryParam = {q:city,appid:'2a7bed2ce8c97dcf726ad7aadf5c4097'}
    let query = new HttpParams({fromObject:queryParam})
    return this.http.get(this.url,{params:query})
  }
  public getCities(){
    return this.http.get("../assets/city.json")
  }
}
