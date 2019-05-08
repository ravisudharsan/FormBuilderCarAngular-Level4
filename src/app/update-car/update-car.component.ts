import { Component, OnInit } from '@angular/core';
import {HttpClientService, Car} from '../service/http-client.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  car:Car;
  updateform:FormGroup;

  constructor(private fb:FormBuilder,private router:Router,private httpservice:HttpClientService) { }

  ngOnInit() {
    let carId = localStorage.getItem("carId");
    let carName=localStorage.getItem("carName");
    let carModel=localStorage.getItem("carModel");
    alert(carId);
    alert(carName);
    alert(carModel);
    this.updateform = this.fb.group({
      id: [],
      name: [''],
      model: ['']
    });
    this.updateform.controls['id'].setValue(carId);
    this.updateform.controls['name'].setValue(carName);
    this.updateform.controls['model'].setValue(carModel);

    /*this.httpservice.getUserById(carId)
      .subscribe( data => {
        this.updateform.setValue(data);
      });*/
  }

  submitCar(){
    console.warn(this.updateform.value);
    this.httpservice.updateCarList(this.updateform.value)
      .subscribe(
        data => {
          alert("Data Updated Successfully");
        },
        error => {
          alert(error);
        });
  }
}
