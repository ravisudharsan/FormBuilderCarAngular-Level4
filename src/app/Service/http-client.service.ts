import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Car{
  constructor(
    public id:string,
    public name:string,
    public model:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  getUserById(id) {
    return this.httpClient.get<Car>('http://localhost:8080/getitem' + '/' + id);
  }

  getCarList()
  {
    return this.httpClient.get<Car[]>('http://localhost:8080/all');
  }

  public deleteCarList(car) {
    return this.httpClient.delete<Car>("http://localhost:8080/delete" + "/"+ car.id);
  }
  
  public updateCarList(car) {
    return this.httpClient.put("http://localhost:8080/update"+"/"+car.id, car);
  }

  public addCarList(car) {
    return this.httpClient.post<Car>("http://localhost:8080/insert", car);
  }

}
