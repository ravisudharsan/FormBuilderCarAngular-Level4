import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClientService, Car } from '../Service/http-client.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  cars:Car[];

  constructor(private router:Router,private httpClientService: HttpClientService) { }
  
  showAddCar(){
    this.router.navigate(['/addcar']);
  }

  ngOnInit() {
    this.httpClientService.getCarList().subscribe(
      response =>{this.cars = response;}
     );
  }

  deleteCar(car: Car): void {
    this.httpClientService.deleteCarList(car)
      .subscribe( data => {
        this.cars = this.cars.filter(u => u !== car);
      })
  };

  updateUser(car: Car): void {
    localStorage.setItem("carId",car.id);
    localStorage.setItem("carName",car.name);
    localStorage.setItem("carModel",car.model);
    this.router.navigate(['/updatecar']);
  }
}
